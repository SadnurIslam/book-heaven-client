import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { onAuthStateChanged, signInWithPopup,GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser =() =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    },[]);

    const authInfo = {
        signInWithGoogle,
        user,
        loading,
        signOutUser
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
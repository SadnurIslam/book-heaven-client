import React, { use, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { IoMdInformationCircle } from 'react-icons/io';
import { Tooltip } from 'react-tooltip';

const Register = () => {
    const { signInWithGoogle, createUserWithPassword, setLoading, updateUserInfo } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordError, setPasswordError] = useState(null);


    useEffect(() => {
        document.title = "Registration - The Book Heaven";
    })

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const name = result.user.displayName;
                toast.success(`Welcome! ${name}`, { autoClose: 1000 });
                setLoading(false);
                navigate(location?.state || '/');
            })
            .catch(error => {
                setLoading(false);
                toast.error(error.message, { autoClose: 2000 });
            });
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        setPasswordError(null);

        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 6 characters, with uppercase and lowercase letters.');
            return;
        }

        createUserWithPassword(email, password)
            .then(() => {
                updateUserInfo({ displayName: name, photoURL: photo });
                setLoading(false);
                toast.success(`Welcome! ${name}`, { autoClose: 1000 });
                navigate('/');
            })
            .catch(error => {
                setLoading(false);
                toast.error(error.message, { autoClose: 2000 });
            });
    }

    return (
        <div className="my-16">
            <div className="form-container max-w-md">
                <h2 className="text-primary text-3xl md:text-4xl font-extrabold mx-auto mb-0">Join The Book Haven</h2>
                <p className="text-secondary mx-auto mb-5">Start building your digital library today.</p>

                <form onSubmit={handleRegistration} className="flex flex-col gap-3">
                    <input name="name" type="text" className="input" placeholder="Enter your name" required />
                    <input name="email" type="email" className="input" placeholder="Enter your email" required />
                    <div className="relative">
                        <input name="password" type="password" className="input" placeholder="Enter your password" />
                        <IoMdInformationCircle data-tooltip-id="info-tooltip" className="absolute top-3 right-3 text-gray-400" />
                        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                    </div>
                    <input name="photo" type="text" className="input" placeholder="Enter your photo URL" required />

                    <button type="submit" className="my-button-primary w-full font-bold py-3">
                        Register
                    </button>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="my-button-secondary w-full font-bold py-3 mt-0 flex items-center justify-center gap-2"
                >
                    <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                    Register with Google
                </button>

                <p className="text-center mt-4 text-secondary">
                    Already registered? <Link to="/login" className="text-blue-500 underline">Login here</Link>
                </p>
            </div>

            <Tooltip
                id="info-tooltip"
                place="bottom"
                className="bg-neutral-800 text-white rounded-md px-3 py-1 shadow-lg"
                content={
                    <ul className="text-sm space-y-1">
                        <li>Password must be at least 6 characters long.</li>
                        <li>Must contain at least one uppercase letter.</li>
                        <li>Must contain at least one lowercase letter.</li>
                    </ul>
                }
            />
        </div>
    );
};

export default Register;

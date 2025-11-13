import React, { use, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast from "react-hot-toast";

const Login = () => {
    const { signInWithGoogle, signInWithPassword, setLoading } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.title = "Login - The Book Heaven";
    })

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const name = result.user.displayName;
                setLoading(false);
                toast.success(`Welcome! ${name}`, { autoClose: 1000 });
                navigate(location?.state || '/');
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 2000 });
                setLoading(false);
            });
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithPassword(email, password)
            .then(result => {
                const user = result.user;
                toast.success(`Welcome back! ${user.displayName}`, { autoClose: 1000 });
                setLoading(false);
                navigate(location?.state || '/');
            })
            .catch(error => {
                toast.error(error.message, { autoClose: 2000 });
                setLoading(false);
            });
    }

    return (
        <div className="my-16">
            <div className="form-container max-w-md">
                <h2 className="text-3xl md:text-4xl font-extrabold mx-auto">Welcome Back</h2>
                <p className="text-secondary mx-auto mb-5">Log in to your account to continue.</p>

                <form onSubmit={handleSignIn} className="flex flex-col gap-3">
                    <input name="email" type="email" className="input" placeholder="Enter your email" required />
                    <input name="password" type="password" className="input" placeholder="Enter your password" required />

                    <button type="submit" className="my-button-primary w-full font-bold py-3">
                        Login
                    </button>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="my-button-secondary w-full font-bold py-3 mt-0 flex items-center justify-center gap-2"
                >
                    <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                    Login with Google
                </button>

                <p className="text-center mt-4 text-secondary">
                    Don't have an account? <Link to="/register" className="text-blue-500 underline">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

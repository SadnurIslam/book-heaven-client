import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast from "react-hot-toast";


const Login = () => {

    const {signInWithGoogle, signInWithPassword, setLoading} = use(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result=>{
            const name = result.user.displayName;
            const email = result.user.email;
            const photo = result.user.photoURL;
            const userInfo = {name, email, photo};
            console.log("User Info:", userInfo);
            setLoading(false);
            navigate(location?.state || '/');
        })
        .catch(error=>{
            setLoading(false);
            console.log("Error:", error.message);
        })
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log("Sign In Data:", {email, password});
        signInWithPassword(email, password)
        .then(result=>{
            const user = result.user;
            toast.success(`Welcome back! ${user.displayName}`, { autoClose: 1000 });
            setLoading(false);
            navigate(location?.state || '/');
        })
        .catch(error=>{
            setLoading(false);
            console.log("Error:", error.message);
        });

    }

    return (
        <div className='my-16'>
            <div className='form-container max-w-md'>
                <h2 className='text-4xl font-bold mx-auto mb-3'>Welcome Back</h2>
                <h4 className='opacity-60 mx-auto mb-5'>Log in to your account to continue.</h4>
                <form onSubmit={handleSignIn}>
                    <div className='flex flex-col gap-1 mb-3'>
                        <label className=''>Email</label>
                        <input name='email' type="email" className="input" placeholder="Enter your email" />
                    </div>
                    <div className='flex flex-col gap-1 mb-1'>
                        <label className=''>Password</label>
                        <input name='password' type="password" className="input" placeholder="Enter your password" />
                    </div>

                    <div className='text-right mb-4 cursor-pointer'>
                        <span className='text-secondary'>Forget password?</span>
                    </div>

                    <div>
                        <button className="btn btn-primary px-5 rounded-lg w-full font-bold">
                            Login
                        </button>
                    </div>

                </form>
                <div>
                    {/* Google */}
                    <button onClick={handleGoogleSignIn} className="my-4 font-bold btn w-full rounded-lg bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

                <div>
                    <p className='text-center mt-2'>Don't have an account? <Link to="/register" className='text-blue-500 underline'>Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
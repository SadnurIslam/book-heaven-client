import React,{useEffect} from 'react';
import errorImg from '../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {

    useEffect(() => {
        document.title = "Error 404 | GameHub";
    }, []);

    const previousRoute = document.referrer || '/';
    return (
        <div className='text-center py-10 md:py-16'>
            <img className='mx-auto mb-7 max-w-[60%]' src={errorImg} alt="" />
            <h3 className='text-3xl font-semibold'>Oops, page not found!</h3>
            <p className='text-[#627382] my-3'>The page you are looking for is not available.</p>
            <Link to={previousRoute} className='btn bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] px-10 border-none text-white'> Go Back!</Link>
        </div>
    );
};

export default ErrorPage;
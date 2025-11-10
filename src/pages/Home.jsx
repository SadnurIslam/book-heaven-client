import React from 'react';
import Banner from '../components/Banner';
import LatestBooks from '../components/latestBooks';

const Home = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Banner></Banner>
            <LatestBooks></LatestBooks>
        </div>
    );
};

export default Home;
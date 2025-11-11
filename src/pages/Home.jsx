import React from 'react';
import Banner from '../components/Banner';
import LatestBooks from '../components/latestBooks';
import ExploreByGenre from '../components/ExploreByGenre';

const Home = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Banner></Banner>
            <LatestBooks></LatestBooks>
            <ExploreByGenre></ExploreByGenre>
        </div>
    );
};

export default Home;
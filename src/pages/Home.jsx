import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import LatestBooks from '../components/LatestBooks';
import ExploreByGenre from '../components/ExploreByGenre';
import BookOfTheWeek from '../components/BookOfTheWeek';

const Home = () => {

  useEffect(()=>{
    document.title = "Home - The Book Heaven";
  })

  return (
    <div className='flex flex-col gap-16'>
      <Banner />
      <LatestBooks />
      <ExploreByGenre />
      <BookOfTheWeek />
    </div>
  );
};

export default Home;

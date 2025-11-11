import React from 'react';
import BooksCard from './BooksCard';

const LatestBooks = () => {
    const dummyBooks = [0,1,2,3,4,5];
    return (
        <div className='mb-16'>
            <h3 className='text-2xl font-bold mb-7'>Fresh on the Shelves</h3>
            <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
                {
                    dummyBooks.map((book, index) => <BooksCard key={index} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default LatestBooks;
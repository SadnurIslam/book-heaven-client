import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard';
import useAxios from '../hooks/useAxios';

const LatestBooks = () => {
    const axios = useAxios();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('/books?limit=6&sort=latest')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching latest books:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [axios]);

    if (loading) {
        return <div>Loading latest books...</div>;
    }
    console.log(books);


    return (
        <div className='mb-16'>
            <h3 className='text-2xl font-bold mb-7'>Fresh on the Shelves {books.length}</h3>
            <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
                {
                    books.map((book) => <BooksCard key={book._id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default LatestBooks;
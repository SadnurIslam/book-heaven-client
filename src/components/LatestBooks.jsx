import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard';
import useAxios from '../hooks/useAxios';
import Skeleton from './Skeleton';

const LatestBooks = () => {
    const axios = useAxios();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('/books?limit=6&sort=latest')
            .then(res => setBooks(res.data))
            .catch(err => console.error('Error fetching latest books:', err))
            .finally(() => setLoading(false));
    }, [axios]);


    return (
        <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center md:text-left">Fresh on the Shelves</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                {
                    loading ? <Skeleton></Skeleton>
                        :
                        books.map(book => <BooksCard key={book._id} book={book} />)
                }
            </div>
        </section>
    );
};

export default LatestBooks;

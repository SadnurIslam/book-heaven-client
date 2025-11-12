import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import useAxios from '../hooks/useAxios';


const AllBooks = () => {
    
    const [books, setBooks] = useState([]);

    const axios = useAxios();

    useEffect(() => {
        axios.get('/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, [axios]);

    return (
        <div className='my-12'>
            <h2 className='text-4xl font-bold mx-auto mb-3'>Our Digital Collection</h2>
            <h4 className='opacity-60 mx-auto mb-3'>Browse, search, and discover your next favorite book from our extensive library.</h4>
            <div className='text-end mb-4'>
                <select defaultValue="Sort By Rating" className="select outline-0 cursor-pointer">
                    <option disabled={true}>Sort By Rating</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
                </select>
            </div>
            <div className="p">
                <div className="overflow-x-auto rounded-lg shadow-md">
                    <table className="table table-zebra w-full">
                        <thead className="bg-base-200">
                            <tr className="text-lg font-semibold row-border">
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Rating</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="">


                            {books?.map((book) => (
                                <tr key={book._id} className="hover odd:bg-base-100 even:bg-base-200 row-border">
                                    <td className="font-medium">{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>Fiction</td>
                                    <td>
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            <Star key={0} size={16} fill="currentColor" />
                                            {
                                                book.rating > 1 ?
                                                    <Star key={1} size={16} fill="currentColor" /> :
                                                    <Star key={1} size={16} />

                                            }
                                            {
                                                book.rating > 2 ?
                                                    <Star key={2} size={16} fill="currentColor" /> :
                                                    <Star key={2} size={16} />

                                            }
                                            {
                                                book.rating > 3 ?
                                                    <Star key={3} size={16} fill="currentColor" /> :
                                                    <Star key={3} size={16} />

                                            }
                                            {
                                                book.rating > 4 ?
                                                    <Star key={4} size={16} fill="currentColor" /> :
                                                    <Star key={4} size={16} />
                                            }

                                        </div>
                                    </td>

                                    <td className="flex gap-2">
                                        <button className="mx-auto btn btn-primary btn-sm rounded-lg">View Details</button>
                                        {/* <button className="btn btn-warning text-white   btn-sm">Update</button>
                                        <button className="btn btn-error text-white  btn-sm">Delete</button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;
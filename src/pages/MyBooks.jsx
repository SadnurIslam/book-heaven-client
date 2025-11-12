import React, { use, useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../contexts/AuthContext';
import UpdateModal from '../components/UpdateModal';

const MyBooks = () => {
    // const books = [
    //     { _id: 1, title: 'Book One', author: 'Author A', rating: 4.5 },
    //     { _id: 2, title: 'Book Two', author: 'Author B', rating: 4.0 },
    //     { _id: 3, title: 'Book Three', author: 'Author C', rating: 3.5 },
    // ]

    const [books, setBooks] = useState([]);
    const axios = useAxios();
    const { user } = use(AuthContext);
    const [loading, setLoading] = useState(true);
    const [selectedBook, setSelectedBook] = useState(null);

    const modalRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`books?email=${user.email}`)
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching user books:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [axios, user.email]);

    if (loading) {
        return <div className='text-center my-20'>Loading your books...</div>;
    }


    const openUpdateModal = (book) => {
        setSelectedBook(book);
        modalRef.current.showModal();
    }

    const closeUpdateModal = () => {
        modalRef.current.close();
    }

    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold mx-auto mb-3'>My Books</h2>
            <h4 className='opacity-60 mx-auto'>You have {books.length} books in your collection.</h4>
            <div className='text-end mb-4'>
                <Link to='/add-book' className="btn btn-primary px-5 rounded-lg font-bold mt-2">
                    <span><FaPlus /></span> <span>Add Book</span>
                </Link>
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
                                    <td>{book.genre}</td>
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

                                    <td className="flex gap-2 justify-center">
                                        <button className=" btn btn-info text-white btn-sm rounded-lg">View</button>
                                        <button onClick={()=>openUpdateModal(book)} className=" btn  btn-sm rounded-lg btn-warning text-white">Update</button>

                                        <button className=" btn btn-sm rounded-lg btn-error text-white  ">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for update */}
            <dialog ref={modalRef} className="modal ">
                <div className="modal-box w-11/12 max-w-5xl p-0">
                    {selectedBook && <UpdateModal key={selectedBook._id} book={selectedBook} closeUpdateModal={closeUpdateModal} setBooks={setBooks} books={books}></UpdateModal>}
                </div>
            </dialog>

        </div>
    );
};

export default MyBooks;
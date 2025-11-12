import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';

const UpdateModal = ({ book, closeUpdateModal, setBook, setBooks, books }) => {

    const [error, setError] = useState(null);
    const axios = useAxios();

    const handleUpdateBook = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const author = event.target.author.value;
        const coverImage = event.target.coverImage.value;
        const rating = event.target.rating.value;
        const genre = event.target.genre.value;
        const summary = event.target.summary.value;
        if (isNaN(rating) || rating < 1 || rating > 5) {
            setError("Rating must be a number between 1 and 5.");
            return;
        }
        setError(null);

        const updatedInfo = {
            title,
            author,
            coverImage,
            rating: parseFloat(rating),
            genre,
            summary
        };

        axios.patch(`/books/${book._id}`, updatedInfo)
            .then(() => {
                Swal.fire({
                    title: "Book updated successfully!",
                    icon: "success",
                    draggable: false
                });

                const updatedBook = {
                    ...updatedInfo,
                    _id: book._id,
                    userEmail: book.userEmail,
                    userName: book.userName
                };

                if(books && setBooks){
                    books = books.map(b => b._id === book._id ? updatedBook : b);
                    setBooks(books);
                }

                if(setBook){
                    setBook(updatedBook);
                }
                

            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message
                });
            })
            .finally(() => {
                closeUpdateModal();
            });
    }


    return (
        <div>
            <div className=' modal-container max-w-5xl'>
                <h2 className='text-4xl font-bold mx-auto mb-3'>Update the Book</h2>
                <h4 className='opacity-60 mx-auto mb-5'>Edit any info to update the book.</h4>
                <form onSubmit={handleUpdateBook}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Title</label>
                                <input name='title' defaultValue={book.title} type="text" className="input" placeholder="Enter book title"  />
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Author</label>
                                <input name='author' defaultValue={book.author} type="text" className="input" placeholder="Enter author name"  />
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Cover Photo URL</label>
                                <input name='coverImage' defaultValue={book.coverImage} type="text" className="input" placeholder="Enter cover photo URL"  />
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Rating</label>
                                <input name='rating' defaultValue={book.rating} type="text" className="input" placeholder="Enter rating(1-5)"  />
                                {error && <span className='text-red-500 text-sm'>{error}</span>}
                            </div>
                        </div>

                        <div className='flex flex-col h-full'>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label>Genre</label>
                                <select name='genre' className="input select cursor-pointer" >
                                    <option value="">Select one</option>
                                    <option value="fiction" selected={book.genre === 'fiction'}>Fiction</option>
                                    <option value="non-fiction" selected={book.genre === 'non-fiction'}>Non-Fiction</option>
                                    <option value="mystery" selected={book.genre === 'mystery'}>Mystery</option>
                                    <option value="fantasy" selected={book.genre === 'fantasy'}>Fantasy</option>
                                    <option value="biography" selected={book.genre === 'biography'}>Biography</option>
                                    <option value="science-fiction" selected={book.genre === 'science-fiction'}>Science Fiction</option>
                                    <option value="romance" selected={book.genre === 'romance'}>Romance</option>
                                    <option value="horror" selected={book.genre === 'horror'}>Horror</option>
                                </select>
                            </div>
                            <div className='flex flex-col flex-1 gap-1 mb-3'>
                                <label>Summary</label>
                                <textarea name='summary' defaultValue={book.summary} className="input h-full p-2" placeholder="Enter book summary" ></textarea>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn btn-primary px-5 rounded-lg w-full font-bold mt-2">
                            <span>Update Book</span>
                        </button>

                    </div>


                </form>
                <div className="modal-action mt-1">
                    <form method="dialog" className='w-full'>
                        <button className="btn btn-soft btn-secondary px-5 rounded-lg w-full font-bold mt-2">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
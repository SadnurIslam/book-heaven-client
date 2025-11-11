import React, { use, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../contexts/AuthContext';

const AddBooks = () => {

    const axios = useAxios();
    const {user} = use(AuthContext);

    const [error, setError] = useState(null);

    const handleAddBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;
        const coverImage = form.coverImage.value;
        const rating = form.rating.value;
        const genre = form.genre.value;
        const summary = form.summary.value;

        if(isNaN(rating) || rating < 1 || rating > 5) {
            setError("Rating must be a number between 1 and 5.");
            return;
        }

        const newBook = {
            title,
            author,
            coverImage,
            rating: parseFloat(rating),
            genre,
            summary,
            userEmail: user?.email
        };

        console.log("New Book Data:", newBook);

        axios.post('/books', newBook)
            .then(response => {
                console.log("Book added successfully:", response.data);
                form.reset();
            })
            .catch(error => {
                console.error("Error adding book:", error);
            });
    }

    return (
        <div className='my-16'>
            <div className=' form-container max-w-5xl'>
                <h2 className='text-4xl font-bold mx-auto mb-3'>Add a New Book</h2>
                <h4 className='opacity-60 mx-auto mb-5'>Fill in the details to publish a new book.</h4>
                <form onSubmit={handleAddBook}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Title</label>
                                <input name='title' type="text" className="input" placeholder="Enter book title"  required/>
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Author</label>
                                <input name='author' type="text" className="input" placeholder="Enter author name"  required/>
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Cover Photo URL</label>
                                <input name='coverImage' type="text" className="input" placeholder="Enter cover photo URL"  required/>
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Rating</label>
                                <input name='rating' type="text" className="input" placeholder="Enter rating(1-5)"  required/>
                                {error && <span className='text-red-500 text-sm'>{error}</span>}
                            </div>
                        </div>

                        <div className='flex flex-col h-full'>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label>Genre</label>
                                <select name='genre' className="input select cursor-pointer" required>
                                    <option value="">Select one</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="non-fiction">Non-Fiction</option>
                                    <option value="mystery">Mystery</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="biography">Biography</option>
                                    <option value="science-fiction">Science Fiction</option>
                                    <option value="romance">Romance</option>
                                    <option value="horror">Horror</option>
                                </select>
                            </div>
                            <div className='flex flex-col flex-1 gap-1 mb-3'>
                                <label>Summary</label>
                                <textarea name='summary' className="input h-full p-2" placeholder="Enter book summary" required></textarea>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn btn-primary px-5 rounded-lg w-full font-bold mt-2">
                            <span><FaPlus /></span> <span>Add Book</span>
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddBooks;
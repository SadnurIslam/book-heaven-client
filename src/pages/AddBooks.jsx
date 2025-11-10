import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddBooks = () => {
    return (
        <div>
            <div className=' form-container max-w-5xl'>
                <h2 className='text-4xl font-bold mx-auto mb-3'>Add a New Book</h2>
                <h4 className='opacity-60 mx-auto mb-5'>Fill in the details to publish a new book.</h4>
                <form>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Title</label>
                                <input name='title' type="text" className="input" placeholder="Enter book title" />
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Author</label>
                                <input name='author' type="text" className="input" placeholder="Enter author name" />
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Cover Photo URL</label>
                                <input name='coverImage' type="text" className="input" placeholder="Enter cover photo URL" />
                            </div>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label className=''>Rating</label>
                                <input name='rating' type="text" className="input" placeholder="Enter rating(1-5)" />
                            </div>
                        </div>

                        <div className='flex flex-col h-full'>
                            <div className='flex flex-col gap-1 mb-3'>
                                <label>Genre</label>
                                <select name='genre' className="input select">
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
                                <textarea name='summary' className="input h-full p-2" placeholder="Enter book summary"></textarea>
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
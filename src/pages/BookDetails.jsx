import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    const axios = useAxios();

    useEffect(()=>{
        setLoading(true);
        axios.get(`/books/${id}`)
        .then(response=>{
            setBook(response.data);
        })
        .catch(error=>{
            toast.error('Error fetching book details: ' + error.message, { autoClose: 2000 });
        })
        .finally(()=>{
            setLoading(false);
        });

    },[axios, id]);

    if(loading){
        return <div className='text-center my-20'>Loading book details...</div>;
    }

    console.log("Book ID from URL:", id);
    console.log("Fetched Book Details:", book);

    return (
        <div className='grid grid-cols-5 gap-10 my-16 mx-auto max-w-4xl justify-center'>
            <div className='col-span-2'>
                <img className='w-full h-full rounded-lg' src={book.coverImage} alt="" />
            </div>
            <div className='col-span-3 flex flex-col gap-5 py-5'>
                <div>
                    <div className="badge badge-soft badge-error mb-2">{book.genre}</div>
                    <h2 className='text-4xl font-bold mb-1'>{book.title}</h2>
                    <h4 className='text-xl opacity-60 mx-auto mb-3'>by {book.author}</h4>
                    <div className='flex gap-4 items-center'>
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
                        ({book.rating} / 5)</div>
                </div>
                <div className='flex gap-3 my-5'>
                    <button className=" btn px-3 rounded-lg btn-info text-white"><MdEdit />Edit Details</button>
                    <button className=" btn px-3 rounded-lg btn-error text-white  "><RiDeleteBinLine /> Delete the Book</button>
                </div>
                <div>
                    <h3 className='border-bottom mb-5 pb-2 text-2xl font-semibold'>Summary</h3>
                    <p className='opacity-70'>{book.summary}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
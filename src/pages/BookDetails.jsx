import React from 'react';
import { Star } from 'lucide-react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

const BookDetails = () => {
    const book = {
        coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDfEqh3rQBUsOx68WoY5VurW3MSa6Hh5cpcVQyjGUAGqaDHseDtkWlSR89QkAJha9etN8Tk-RqSEIxz1tA4twew7SqXkQ0_VDb1LWiUSOHe5QjCZ9wJJOLXM2uW75FJDmNkgkOVJDJYM-n8pi1DJiZiG87hHD_gxO4To-RfjjPOtTfPezMenklDEuLz7TojnAp7Bb9kAolILMotddzeSN2jTxxlmXxNzeDxGcrT9FhbAiSREBkNMwOp3orgKL0qAgJ-xgsfP8TI0li",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic Fiction",
        rating: 4.5,
        summary: "The Great Gatsby is a novel by F. Scott Fitzgerald that explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age in the United States."

    }
    return (
        <div className='grid grid-cols-5 gap-10 my-16 mx-auto max-w-4xl justify-center'>
            <div className='col-span-2'>
                <img className='w-full h-full' src={book.coverImage} alt="" />
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
                <div className='flex gap-3'>
                    <button className=" btn px-3 rounded-lg btn-info text-white"><MdEdit />Edit Details</button>
                    <button className=" btn px-3 rounded-lg btn-error text-white  "><RiDeleteBinLine /> Delete the Book</button>
                </div>
                <div>
                    <h3 className='border-bottom mb-5 pb-2'>Summary</h3>
                    <p>{book.summary}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
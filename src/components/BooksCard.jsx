import React from 'react';
import { Star } from 'lucide-react';

const BooksCard = ({book}) => {
    // const book = {
    //     coverImage: 'https://m.media-amazon.com/images/I/51NKhnjhpGL._SX329_BO1,204,203,200_.jpg',
    //     title: 'The Great Gatsby',
    //     author: 'F. Scott Fitzgerald',
    //     genre: 'Classic',
    //     rating: 4.2
    // };
    return (
        <div className="card-container">
            <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-52 md:h-72 object-fit"
            />

            <div className="space-y-1 py-5 px-2">
                <div className="badge badge-soft badge-warning">{book.genre}</div>
                <h3 className="text-lg text-primary font-semibold line-clamp-1">{book.title}</h3>
                <p className="text-sm text-secondary ">{book.author}</p>

                <div className="flex items-center gap-1 text-yellow-400">
                    <Star key={0} size={16} fill="currentColor" />
                    {
                        book.rating>1?
                        <Star key={1} size={16} fill="currentColor" />:
                        <Star key={1} size={16} />
                        
                    }
                    {
                        book.rating>2?
                        <Star key={2} size={16} fill="currentColor" />:
                        <Star key={2} size={16} />
                        
                    }
                    {
                        book.rating>3?
                        <Star key={3} size={16} fill="currentColor" />:
                        <Star key={3} size={16} />
                        
                    }
                    {
                        book.rating>4?
                        <Star key={4} size={16} fill="currentColor" />:
                        <Star key={4} size={16} />
                    }
                    
                    <span className="text-sm ml-1 text-secondary">({book.rating})</span>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
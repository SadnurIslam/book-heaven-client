import React from 'react';
import { Star } from 'lucide-react';

const BooksCard = () => {
    const data = {
        coverPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR0PPI-wMcpNpMkVFbwXgdzdLzG4vUUiJ5kVHR9ufoZ7DwybIHEsLwCw6vrviYWSDd1rKXs4dQIDHopw8ZJ5h5-ns8T3T6zp9wXU7qcxbgt2fkhzDS-DkRoy9g3LNvGrfXtieoqx6NdeWF3uoM1yAq-Oe2_xA_ZwiquLL9JxtV_3iSs84l7PvPC3uJS2ydqj8puSzxUTPNChuWQ7wqXGlS8bzkikUnoL6JVoiE4OjNI53CXQriuOh44RAgvRvVTIWnheEZiowS8hu8',
        title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        category: 'Self-Help',
        ratings: 4,
    }
    const viewLink = false;
    return (
        <div className="card-container">
            <img
                src={data.coverPhoto}
                alt={data.title}
                className="w-full h-52 md:h-72 object-fit"
            />

            <div className="space-y-1 py-5 px-2">
                <div className="badge badge-soft badge-warning">{data.category}</div>
                <h3 className="text-lg text-primary font-semibold line-clamp-1">{data.title}</h3>
                <p className="text-sm text-secondary ">{data.category}</p>

                <div className="flex items-center gap-1 text-yellow-400">
                    <Star key={0} size={16} fill="currentColor" />
                    {
                        data.ratings>1?
                        <Star key={1} size={16} fill="currentColor" />:
                        <Star key={1} size={16} />
                        
                    }
                    {
                        data.ratings>2?
                        <Star key={2} size={16} fill="currentColor" />:
                        <Star key={2} size={16} />
                        
                    }
                    {
                        data.ratings>3?
                        <Star key={3} size={16} fill="currentColor" />:
                        <Star key={3} size={16} />
                        
                    }
                    {
                        data.ratings>4?
                        <Star key={4} size={16} fill="currentColor" />:
                        <Star key={4} size={16} />
                    }
                    
                    <span className="text-sm ml-1 text-secondary">({data.ratings})</span>
                </div>
            </div>
            {
                viewLink &&
                <div className="">
                    <button className="btn btn-primary btn-sm w-full">View Details</button>
                </div>
            }
        </div>
    );
};

export default BooksCard;
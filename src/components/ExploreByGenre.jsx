import React from 'react';
import GenreCard from './GenreCard';

const ExploreByGenre = () => {
    const genres = [
        {
            name: 'Fiction',
            image: 'https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmljdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
        },
        {
            name: 'Mystery',
            image: 'https://images.unsplash.com/photo-1482424917728-d82d29662023?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXlzdGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
        },
        {
            name: 'Fantasy',
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
        },
        {
            name: 'Biography',
            image: 'https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500'
        }
    ]
    return (
        <div className='mb-16'>
            <h3 className='text-2xl font-bold mb-7'>Explore by Genre</h3>
            <div className='mt-5 grid grid-cols-4 gap-5'>
                {
                    genres.map((genre,index)=><GenreCard key={index} genre={genre}></GenreCard>)
                }
            </div>
        </div>
    );
};

export default ExploreByGenre;
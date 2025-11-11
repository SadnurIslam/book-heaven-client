import React from 'react';

const BookOfTheWeek = () => {
    return (
        <div className='mb-16'>
            <h3 className='text-2xl font-bold mb-7'>Book of the Week</h3>
            <div className='mt-5 grid grid-cols-2 rounded-lg overflow-hidden book-bg'>
                <div>
                    <img className='w-full' src="https://i.ibb.co.com/hxj98cx6/bookoftheweek.png" alt="" />
                </div>
                <div className='flex flex-col gap-5 py-10 justify-center px-10'>
                    <div>
                        <h3 className='text-2xl font-bold'>Circe</h3>
                        <span className='opacity-70 font-semibold text-lg'>by by Madeline Miller</span>
                    </div>
                    <div>
                        <p className='opacity-60'>In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power—the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.</p>
                    </div>
                    <div>
                        <button className='btn btn-primary rounded-lg text-white'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookOfTheWeek;
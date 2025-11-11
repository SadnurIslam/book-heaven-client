import React from 'react';

const GenreCard = ({ genre }) => {
    const { name, image } = genre;
    return (
        <div>
            {
                <div className="relative rounded-lg overflow-hidden group h-40">
                    <img
                        src={image}
                        alt={name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-white text-xl font-semibold text-center px-2 drop-shadow-lg">
                            {name}
                        </h4>
                    </div>
                </div>

            }
        </div>
    );
};

export default GenreCard;
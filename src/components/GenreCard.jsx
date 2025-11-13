import React from 'react';

const GenreCard = ({ genre }) => {
  const { name, image } = genre;

  return (
    <div className="relative rounded-2xl overflow-hidden group h-40 md:h-48 shadow-md hover:shadow-lg transition-all">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>

      <div className="absolute inset-0 flex items-center justify-center px-2">
        <h4 className="text-blue-200! text-xl md:text-2xl font-bold text-center drop-shadow-lg">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default GenreCard;

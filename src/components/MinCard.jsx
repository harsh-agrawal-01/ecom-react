import React from 'react'
import { Link } from 'react-router-dom'

const MinCard = ({ product }) => {
  const { id, title, price, image, rating, category } = product;
  const rate = rating?.rate ?? 0;
  const count = rating?.count ?? 0;

  return (
    <Link
      to={`/details/${id}`}
      className="w-[180px] rounded-lg overflow-hidden shadow-sm p-2 bg-white border border-gray-300 inline-block mt-3 ml-5 active:scale-95 transition-all duration-200"
    >
      <img
        className="h-35 mx-auto w-30 object-contain"
        src={image}
        alt={title}
      />
      <div className="p-2">
        <h2 className="text-xs font-bold h-8 overflow-hidden text-gray-800 leading-tight hover:text-blue-400">
          {title}
        </h2>
        <p className="text-sm font-semibold text-gray-900 mt-1">${price}</p>
        <p className="text-[10px] text-gray-500 truncate">{category}</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-500 text-xs">&#9733;</span>
          <span className="text-gray-700 ml-1 text-[10px]">
            {rate} ({count} reviews)
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MinCard;

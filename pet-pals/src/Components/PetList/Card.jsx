import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ name, type, tag, id, image }) {
  const navigate = useNavigate();

  return (
    <div className="relative group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition duration-300 hover:shadow-xl w-full max-w-sm mx-auto">
      <div className="p-4 space-y-2 group-hover:opacity-0 transition duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-xl"
        />
        <p className="text-xl font-semibold text-gray-800 dark:text-white">
          {name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">{type}</p>
      </div>
      <div className="absolute inset-0 p-4 flex flex-col justify-center items-center bg-orange-100 dark:bg-purple-900 opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-base font-medium text-gray-800 dark:text-white mb-4">
          {tag}
        </p>
        <button
          onClick={() => navigate(`/pet-detail/${id}`)}
          className="px-4 py-2 bg-orange-500 dark:bg-purple-500 text-white rounded-md hover:bg-orange-600 dark:hover:bg-purple-600 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;

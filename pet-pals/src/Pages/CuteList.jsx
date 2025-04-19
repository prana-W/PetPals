import React from 'react';

function CuteList() {
  const data = JSON.parse(localStorage.getItem('cuteList')) || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.length > 0 ? (
        data.map((pet, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-4 flex flex-col items-center"
          >
            {pet.image && (
              <img
                src={pet.image}
                alt={pet.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
            )}
            <h2 className="text-lg font-bold dark:text-purple-400 text-orange-500">
              {pet.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm capitalize">
              {pet.type}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No pets in cute list 🐾
        </p>
      )}
    </div>
  );
}

export default CuteList;

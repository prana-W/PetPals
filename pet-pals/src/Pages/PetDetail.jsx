import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import allPets from "../allPets";
import { toast } from "react-hot-toast";

function PetDetail() {
  // this gives the petId from the URL
  const petId = useParams().id;
  const navigate = useNavigate(); // Hook to navigate programmatically

  const addToCuteList = () => {
    localStorage.setItem(
      "cuteList",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("cuteList") || "[]"),
        petData,
      ])
    );
    toast.success(`${petData.name} is waiting in Cute-List!`);
  };

  const petDatas = allPets();
  const petData = petDatas[petId - 1];

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out w-full md:w-3/4 lg:w-2/3">
        <div className="flex flex-col items-center">
          <div className="w-72 h-72 mb-6 overflow-hidden rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out">
            <img
              className="w-full h-full object-cover"
              src={petData.image}
              alt={petData.name}
            />
          </div>
          <h1 className="text-4xl font-semibold text-white mb-4 drop-shadow-lg">
            {petData.name}
          </h1>
          <p className="text-lg text-gray-200 opacity-80 mb-6">
            <strong className="text-indigo-300">Tags:</strong> {petData.tag}
          </p>
          <p className="text-lg text-gray-200 opacity-80 mb-6">
            <strong className="text-indigo-300">Breed:</strong> {petData.breed}
          </p>
          <p className="text-lg text-gray-200 opacity-80 mb-6">
            <strong className="text-indigo-300">Tags:</strong> {petData.description}
          </p>
          <button
            onClick={addToCuteList}
            className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Add to Cute List!
          </button>
<br />
          <button
            onClick={() => navigate('/adopt')}
            className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Adopt
          </button>
          
          {/* Go Back Button */}
          <button
            onClick={() => navigate("/pets")}
            className="mt-6 px-6 py-2 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetDetail;

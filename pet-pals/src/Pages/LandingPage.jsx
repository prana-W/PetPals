import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
      <header className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-400 drop-shadow">
          Welcome to PetPals 🐾
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-xl">
          Find your furry friend today. View adorable pets and give them a forever home.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link
            to="/pets"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition shadow-lg"
          >
            View Pets
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-purple-500 text-purple-300 hover:bg-purple-700 rounded-xl transition"
          >
            About Us
          </Link>
        </div>
      </header>
      <section className="bg-zinc-800 py-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h2 className="text-2xl font-semibold text-purple-400">Browse Pets</h2>
            <p className="text-gray-400 mt-2">
              Discover pets of all kinds, from playful pups to cuddly kittens.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-purple-400">Easy Adoption</h2>
            <p className="text-gray-400 mt-2">
              Quick and seamless adoption process with real-time updates.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-purple-400">Community Driven</h2>
            <p className="text-gray-400 mt-2">
              Connect with shelters and pet lovers near you.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;

import React from "react";
import PetCard from "../Components/PetList/PetCard";

function Home() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold text-purple-400 text-center my-8 px-4">
        Browse from a variety of categories. Filter from using the filter tab.
      </h1>
      <PetCard />
    </>
  );
}

export default Home;

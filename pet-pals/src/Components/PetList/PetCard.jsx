import React from "react";
import Card from "./Card";
import petData from "../../allPets"

function PetCard({ type = "" }) {

    const allPets = petData()

  const petsToShow =
    type === ""
      ? allPets
      : allPets.filter((pet) => pet.type.toLowerCase() === type.toLowerCase());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {petsToShow.map((pet, index) => (
        <Card key={index} {...pet} id={index + 1} />
      ))}
    </div>
  );
}

export default PetCard;

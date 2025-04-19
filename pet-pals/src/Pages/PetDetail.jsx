import React from "react";
import { useParams } from "react-router-dom";
import allPets from "../allPets";
import {toast} from "react-hot-toast";

function PetDetail() {


  //this give the pertId from the url
  const petId = useParams().id;

  const addToCuteList = () => {
    localStorage.setItem(
      "cuteList",
      JSON.stringify([...JSON.parse(localStorage.getItem("cuteList") || "[]"), petData])
    );
    toast.success(`${petData.name} is waiting in Cute-List!`);
  };

  const petDatas = allPets();

  const petData = petDatas[petId - 1];

  return (
    <>
      <img src={petData.image} alt="" />
      <p>Name: {petData.name}</p>
      <p>Type: {petData.type}</p>
      <p>Tags: {petData.tag}</p>

      <button onClick={addToCuteList}>Add to Cute List!</button>
    </>
  );
}

export default PetDetail;

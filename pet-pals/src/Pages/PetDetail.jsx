import React from 'react'
import { useParams } from 'react-router-dom'
import  allPets  from '../allPets'


function PetDetail() {

  //this give the pertId from the url
  const petId = useParams().id

  const petDatas = allPets()

  const petData = petDatas[petId - 1]

  return (
    <>

  <img src={petData.image} alt="" />
  <p>Name: {petData.name}</p>
  <p>Type: {petData.type}</p>
  <p>Tags: {petData.tag}</p>

    
    
    
    </>
  )
}

export default PetDetail
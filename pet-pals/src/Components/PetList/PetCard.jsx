import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import petData from "../../allPets";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Example = () => {

    let type = useParams()

    if (type) {
        type = type.id
    }else type = "t"

    console.log(type);

  const allPets = petData();

  const petsToShow =
    type == "t"
      ? allPets
      : allPets.filter((pet) => pet.type.toLowerCase() === type.toLowerCase());

  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel pets={petsToShow} />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
    // <h1>test</h1>
  );
};

const HorizontalScrollCarousel = ({ pets }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-6">
          {pets.map((pet, index) => (
            <ScrollCard pet={pet} key={index} id={index+1}/>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ScrollCard = ({ pet, id }) => {
    const navigate = useNavigate()
  return (
    <div
      key={pet.name}
      className="group relative h-[450px] w-[350px] rounded-xl overflow-hidden bg-zinc-700 shadow-lg"
      onClick={() => navigate (`/pet-detail/${id}`)}
    >
      <div
        style={{
          backgroundImage: `url(${pet.image || "/default-dog.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
        <h3 className="text-xl font-bold text-white">{pet.name}</h3>
        <p className="text-sm text-purple-300 capitalize">{pet.type}</p>
      </div>
    </div>
  );
};

export default Example;

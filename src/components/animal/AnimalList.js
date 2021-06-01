import React, { useContext, useEffect } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []);
  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <section className="animals">
      {animals.map((animal) => {
        return (
          <div className="animal" id={`animal--${animal.id}`}>
            <div className="animal__name">
              Name: {animal.name}
            </div>
            <div className="animal__breed">
              Breed: {animal.breed}
            </div>
          </div>
        );
      })}
    </section>
  );
};

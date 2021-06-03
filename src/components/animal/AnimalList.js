/* import React, { useState, useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useHistory } from "react-router";

export const AnimalList = ({ taco }) => {
  const { animals, getAnimals } = useContext(AnimalContext);
  const history = useHistory();

  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Make Reservation
      </button>

      <div className="animals">
        {animals.map((animal) => (
          <Link to={`/animals/detail/${animal.id}`}>
            {animal.name}
          </Link>
        ))}
      </div>
    </>
  );
}; */

import React, { useContext, useEffect } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { AnimalContext } from "./AnimalProvider";
import { useHistory } from "react-router-dom";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);

  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => history.push("/animals/create")}>
        Add Animal
      </button>
      <div className="animals">
        {animals.map((animal) => {
          return (
            <div
              className="animal"
              key={animal.id}
              id={`animal--${animal.id}`}
            >
              <div className="animal__name">
                Name: {animal.name}
              </div>
              <div className="animal__breed">
                Breed: {animal.breed}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

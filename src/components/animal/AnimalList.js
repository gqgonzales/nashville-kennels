import React, { useState, useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalDetail } from "./AnimalDetail";
import "./Animal.css";
import { useHistory } from "react-router-dom";

export const AnimalList = () => {
  const { animals, getAnimals, searchTerms } =
    useContext(AnimalContext);
  const [filteredAnimals, setFiltered] = useState([]);
  const history = useHistory();

  // Initialization effect hook -> Go get animal data
  // Empty dependency array - useEffect only runs after first render

  useEffect(() => {
    getAnimals();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals);
    }
  }, [searchTerms, animals]);

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Add a new animal!
      </button>
      <div className="animals">
        {filteredAnimals.map((animal) => {
          return (
            <AnimalDetail key={animal.id} animal={animal} />
          );
        })}
      </div>
    </>
  );
};

/* return (
    <>
      <h2>Animals</h2>

      <button onClick={() => history.push("/animals/create")}>
        Register new animal!
      </button>
      <button onClick={() => history.push("/animals")}>
        Cancel!
      </button>

      <div className="animals">
        {animals.map((animal) => (
          <Link
            to={`/animals/detail/${animal.id}`}
            key={animal.id}
            className="animal"
          >
            {animal.name} the {animal.breed}
          </Link>
        ))}
      </div>
    </>
  );
};
 */
/* import React, { useContext, useEffect } from "react";
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
 */

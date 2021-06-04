import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useHistory, useParams } from "react-router-dom";

export const AnimalDetail = () => {
  // HEAD WIZARDS: I called releaseAnimal here in my useContext object, is that correct? Check line 17.
  const { animals, releaseAnimal } = useContext(AnimalContext);
  const [animal, setAnimal] = useState({
    location: {},
    customer: {},
  });

  const history = useHistory();

  const handleRelease = () => {
    releaseAnimal(animal.id).then(() => {
      history.push("/animals");
    });
  };

  /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
  const { animalId } = useParams();

  useEffect(() => {
    const thisAnimal = animals.find(
      (a) => a.id === parseInt(animalId)
    ) || { location: {}, customer: {} };

    setAnimal(thisAnimal);
  }, [animalId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">
        A sweet {animal.breed} 🥺 💖
      </div>
      <div className="animal__location">
        Location: {animal.location.name}
      </div>
      <div className="animal__owner">
        Customer: {animal.customer.name}
      </div>
      <button onClick={handleRelease}>Release Animal</button>
      <button
        onClick={() => {
          history.push(`/animals/edit/${animal.id}`);
        }}
      >
        Edit Animal Info
      </button>
    </section>
  );
};

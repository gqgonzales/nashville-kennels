import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useHistory, useParams } from "react-router-dom";

export const AnimalDetail = () => {
  const { animals, releaseAnimal } = useContext(AnimalContext);
  const [animal, setAnimal] = useState({
    location: {},
    customer: {},
  });

  const history = useHistory();
  const { animalId } = useParams();

  useEffect(() => {
    const thisAnimal = animals.find(
      (a) => a.id === parseInt(animalId)
    ) || { location: {}, customer: {} };
    setAnimal(thisAnimal);
  }, [animalId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRelease = () => {
    releaseAnimal(animal.id).then(() => {
      history.push("/animals");
    });
  };

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
      <button className="delete__button" onClick={handleRelease}>
        Release Animal
      </button>
      <button
        onClick={() => {
          history.push(`/animals/edit/${animal.id}`);
        }}
      >
        Edit Animal Info
      </button>
      <button onClick={() => history.push("/animals")}>
        Back to List
      </button>
    </section>
  );
};

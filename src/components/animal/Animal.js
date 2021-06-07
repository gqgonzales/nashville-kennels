import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";

export const Animal = ({ animalObj }) => (
  <section className="animal">
    <Link to={`/animals/detail/${animalObj.id}`}>
      <h3 className="animal__name">{animalObj.name}</h3>{" "}
    </Link>
    <div className="animal__breed">{animalObj.breed}</div>
  </section>
);

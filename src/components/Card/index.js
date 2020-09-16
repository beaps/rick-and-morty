import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export const Card = ({ character }) => (
  <div className="card-container">
    <Link to={`detail/${character.id}`}>
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
    </Link>
  </div>
);

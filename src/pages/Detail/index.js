import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export const Detail = (props) => {
  const { characterId } = props.match.params;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [characterId]);
  console.log(character);

  return (
    <div className="detail">
      <Link to="/">&#8592; Go back</Link>
      <div className="detail__info__container">
        <div className="detail__info">
          <div className="image-container">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="data">
            <h2 className="name">{character.name}</h2>
            <h3>Status</h3>
            <p className="status">{character.status}</p>
            <h3>Specie</h3>
            <p className="species">{character.species}</p>
            <h3>Gender</h3>
            <p className="gender">{character.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

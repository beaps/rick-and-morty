import React, { useEffect, useState } from "react";

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
      <div className="detail__info">
        <div className="image-container">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="data">
          <div className="name">{character.name}</div>
          <div className="status">{character.status}</div>
          <div className="species">{character.species}</div>
          <div className="gender">{character.gender}</div>
        </div>
      </div>
    </div>
  );
};

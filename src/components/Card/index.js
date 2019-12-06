import React from 'react';

import './styles.css';

export const Card = ({ character }) => (
  <div className='card-container'>
    <h2>{character.name}</h2>
    <p>{character.species}</p>
    <img
      src={character.image}
      alt={character.name}
    />
  </div>
)
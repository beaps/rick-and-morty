import React from 'react';

import { Card } from '../Card';

import './styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.characters.map(character => (
      <Card key={character.id} character={character} />
    ))}
  </div>);
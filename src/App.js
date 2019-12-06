import React, { useState, useEffect } from 'react';

import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';

import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = e => setSearchField(e.target.value);

  return (
    <div className='App'>
      <SearchBox
        placeholder='search characters'
        handleChange={handleChange}
      />
      <CardList characters={filteredCharacters}></CardList>
    </div>
  );
}

export default App;

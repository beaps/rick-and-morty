import React, { useState, useEffect } from 'react';

import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';

import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = e => setSearchField(e.target.value);

  return (
    <div className='App'>
      <SearchBox
        placeholder='search monsters'
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;

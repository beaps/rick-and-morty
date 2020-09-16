import React, { useState, useEffect } from "react";

import { CardList } from "../../components/CardList";
import { SearchBox } from "../../components/SearchBox";

import "./styles.css";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleChange = (e) => setSearchField(e.target.value);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="home">
      <SearchBox placeholder="Search characters" handleChange={handleChange} />
      <CardList characters={filteredCharacters}></CardList>
    </div>
  );
};

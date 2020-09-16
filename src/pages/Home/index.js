import React, { useState, useEffect } from "react";

import { CardList } from "../../components/CardList";
import { SearchBox } from "../../components/SearchBox";
import { ToogleButton } from "../../components/ToogleButton";

import "./styles.css";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleChange = (e) => setSearchField(e.target.value);
  const handleTheme = (e) =>
    e.target.checked ? setTheme("dark") : setTheme("light");

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="home" data-theme={theme}>
      <ToogleButton handleTheme={handleTheme} />
      <header>
        <h1>
          Rick <span>and</span> Morty
        </h1>
      </header>
      <SearchBox placeholder="Search characters" handleChange={handleChange} />
      <CardList characters={filteredCharacters}></CardList>
    </div>
  );
};

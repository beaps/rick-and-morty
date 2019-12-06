import React from 'react';

import './styles.css';
import searchIcon from '../../icons/search.svg';

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="searchBox__container">
    <span className="searchBox__icon-container">
      <img src={searchIcon} alt=""/>
    </span>
    <input
      className='searchBox__input'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);
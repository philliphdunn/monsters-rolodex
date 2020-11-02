import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => ( //if you don't need i - internal state; nor ii - lifecycle methods, then use a constant functional method
  <input
    className = 'search'
    type='search'
    placeholder={ placeholder }
    onChange={ handleChange }  // asynchronous function with callback
  />
)

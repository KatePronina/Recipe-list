import React from 'react';

import './search.css';

const Search = ({ onKeyUp }) => {

  return (
    <input type="text" className="recipe__search" onKeyUp={ onKeyUp }/>
  )
}

export default Search;
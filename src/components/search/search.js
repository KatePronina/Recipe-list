import React from 'react';

const Search = ({ onKeyUp }) => {

  return (
    <input type="text" className="recipe__search" onKeyUp={ onKeyUp }/>
  )
}

export default Search;
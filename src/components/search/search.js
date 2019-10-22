import React from 'react';
import { connect } from 'react-redux';

import { searchFilterChanged } from '../../actions';

import './search.css';

const Search = ({ onNewValue }) => {

  return (
    <input type="text"
           className="recipe__search"
           placeholder="Поиск..."
           onKeyUp={ (event) => onNewValue(event.target.value) }/>
  )
}

const mapDispatchToProps = {
  onNewValue: searchFilterChanged
}

export default connect(null, mapDispatchToProps)(Search);
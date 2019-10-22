import React from 'react';

import Search from '../search';
import FavoriteBtn from '../favorite-btn';
import List from '../list';
import Form from '../form';

import './app.css';

const App = () => {
  return (
    <div className="recipe">
      <h1 className="recipe__title">Recipe list</h1>
      <div className="recipe__filters">
        <Search />
        <FavoriteBtn />
      </div>
      <List />
      <div className="recipe__form">
        <Form />
      </div>
    </div>
  )
}

export default App;
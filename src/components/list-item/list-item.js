import React from 'react';

const ListItem = ({ data }) => {

  return (
    <li className="recipe__item">
      <div className="recipe__item-header">
        <h2 className="recipe__item-title">{ data.title }</h2>
        <button className="recipe__item-fav">Избранное</button>
      </div>
      <p className="recipe__item-info">{ data.description }</p>
    </li>
  )
}

export default ListItem;
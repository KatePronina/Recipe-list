import React from 'react';

import './list-item.css';

const ListItem = ({ data, onToggleFavorites }) => {

  let classNames = 'recipe__item'
  if (data.favorites) classNames += ' recipe__item_favorite'

  return (
    <li className={ classNames }>
      <div className="recipe__item-header">
        <h2 className="recipe__item-title">{ data.title }</h2>
        <button className="recipe__item-fav" onClick={ onToggleFavorites }>Избранное</button>
      </div>
      <p className="recipe__item-info">{ data.description }</p>
    </li>
  )
}

export default ListItem;
import React from 'react';

import './list-item.css';

const ListItem = ({ data, onToggleFavorites }) => {

  let titleClassNames = 'recipe__item-title'
  if (data.favorites) titleClassNames += ' recipe__item-title_favorite'

  let buttonClassNames = 'recipe__item-fav'
  if (data.favorites) buttonClassNames += ' recipe__item-fav_active'

  return (
    <li className="recipe__item">
      <div className="recipe__item-header">
        <button className={ buttonClassNames } onClick={ onToggleFavorites }>Избранное</button>
        <h2 className={ titleClassNames }>{ data.title }</h2>
      </div>
      <p className="recipe__item-info">{ data.description }</p>
    </li>
  )
}

export default ListItem;
import React from 'react';

import './favorite-btn.css';

const FavoriteBtn = ({ onFavoritesFilterToggle, filter }) => {
  const classNames = 'recipe__favorite-btn ' + (filter === 'favorite' ? 'recipe__favorite-btn_active' : '');

  return(
    <button className={ classNames }
            onClick={ onFavoritesFilterToggle }>Показать избранные</button>
  )
}

export default FavoriteBtn;
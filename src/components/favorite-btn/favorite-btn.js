import React from 'react';
import { connect } from 'react-redux';

import { changeFavoriteFilter } from '../../actions';

import './favorite-btn.css';

const FavoriteBtn = ({ onFavoritesFilterToggle, filter }) => {
  const classNames = 'recipe__favorite-btn ' + (filter === 'favorite' ? 'recipe__favorite-btn_active' : '');

  return(
    <button className={ classNames }
            onClick={ onFavoritesFilterToggle }>Показать избранные</button>
  )
}

const mapStateToProps = ({ filter }) => {
  return {
    filter
  }
}

const mapDispatchToProps = {
  onFavoritesFilterToggle: changeFavoriteFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBtn);

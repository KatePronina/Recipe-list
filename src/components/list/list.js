import React from 'react';

import ListItem from '../list-item';

import './list.css';

const List = ({ items, onToggleFavorites }) => {

  const elements = items.map((item) => {
    return <ListItem data={ item }
                     key={ item.id }
                     onToggleFavorites={() => onToggleFavorites(item.id)} />
  })

  return (
    <ul className="recipe__list">{ elements }</ul>
  )
}

export default List;
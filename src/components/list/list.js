import React from 'react';

import ListItem from '../list-item';

const List = ({ items }) => {

  const elements = items.map((item) => {
    return <ListItem data={ item }/>
  })

  return (
    <ul className="recipe__list">{ elements }</ul>
  )
}

export default List;
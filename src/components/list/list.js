import React from 'react';
import { connect } from 'react-redux';

import ListItem from '../list-item';

import { toggleRecipeFavoriteStatus } from '../../actions';

import './list.css';

const List = ({ items, search, filter, onToggleFavorites }) => {

  const filteredItems = items
                    .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                    .filter((item) => {
                      if (filter === 'favorite') {
                        return item.favorites;
                      } else {
                        return true;
                      }
                    })

  const elements = filteredItems.map((item) => {
    return <ListItem data={ item }
                     key={ item.id }
                     onToggleFavorites={() => onToggleFavorites(item.id)} />
  })

  return (
    <ul className="recipe__list">{ elements }</ul>
  )
}

const mapStateToProps = ({ items, search, filter }) => {
  return {
    items,
    search,
    filter
  }
}

const mapDispatchToProps = {
  onToggleFavorites: toggleRecipeFavoriteStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

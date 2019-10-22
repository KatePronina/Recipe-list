
const recipeDeleted = (recipeId) => {
  return {
    type: 'RECIPE_DELETED',
    payload: recipeId
  }
}

const searchFilterChanged = (filterValue) => {
  return {
    type: 'SEARCH_FILTER_CHANGED',
    payload: filterValue
  }
}

const addRecipe = (recipe) => {
  return {
    type: 'RECIPE_ADDED',
    payload: recipe
  }
}

const toggleRecipeFavoriteStatus = (recipeId) => {
  return {
    type: 'RECIPE_TOGGLE_FAVORITES',
    payload: recipeId
  }
}

const changeFavoriteFilter = () => {
  return {
    type: 'FAVORITE_FILTER_CHANGED'
  }
}

export {
  recipeDeleted,
  searchFilterChanged,
  addRecipe,
  toggleRecipeFavoriteStatus,
  changeFavoriteFilter,
};

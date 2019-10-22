
const initialState = {
  items: [
    {
      title: 'Картошка с грибами и спаржевой фасолью',
      description: 'Картошку нарезаем на четвертинки – половинки. Если картофель не крупный, то можно положить и целыми клубнями. Кладем лавровый лист. Насыпаем равномерно на картошку с лавровым листом спаржевую фасоль, на фасоль помещаем грибы. Солим, перчим наше блюдо. Если вы являетесь любителем лука, то он вкуса не испортит. Можете нарезать его крупными полукольцами перед тем, как натрете сыр. Натираем на крупной терке сыр. Наливаем воду, и это обязательно, так как без воды картошка станет сухой, а не тающей во рту. Ставим в духовку на 60-80 минут при температуре 180 градусов. Приготовится ваше блюдо и через час, но для того, чтобы картошка была нежнейшая, а грибы и фасоль отдали весь свой вкус и аромат, пусть еще немного потомится.',
      favorites: true,
      id: 1
    },
    {
      title: 'Омлет с красной икрой',
      description: 'В большую глубокую миску разбиваем яйца. Взбиваем их венчиком. Добавляем соль, перец черный молотый, взбиваем еще раз. Вливаем молоко, продолжаем взбивать. На разогретую сковородку, смазанную маслом, выливаем яично-молочную смесь. Посыпаем укропом. На очень медленном огне жарим под крышкой до готовности. Румяный край вам подскажет, что омлет готов. Подавать с красной икрой, которую можно положить и на очень горячий омлет.',
      favorites: false,
      id: 2
    },
    {
      title: 'Гарнир из репы и моркови',
      description: 'Репу и морковь хорошенько вымыть щеткой для овощей. Очистить от кожуры и нарезать кубиками размером приблизительно 1х1 сантиметр. В кастрюле вскипятить воду, слегка подсолить, засыпать репу с морковкой и бланшировать в течение 5 минут. Откинуть корнеплоды на дуршлаг и дать полностью стечь воде. В сковороде разогреть растительное масло. Выложить морковку с репой и обжаривать 3-4 минуты. Добавить кунжутные семена, посолить, поперчить. Тщательно перемешать. Готовить еще 4 минуты на небольшом огне, помешивая.',
      favorites: false,
      id: 3
    },
    {
      title: 'Паста с острым перцем',
      description: 'Отвариваете пасту в подсоленной воде до готовности. Очищаете чеснок и раздавливаете зубчики ножом, нарезаете тонкими колечками острый перец. Разогреваете сковороду, добавляете оливковое масло и чеснок. Обжариваете буквально минуту и добавляете перец и пасту. Приправляете черным молотым перцем и сухим базиликом. Обжариваете всё секунд 30 и снимаете с огня. Чеснок вынимаете, раскладываете по тарелкам и посыпаете тертым сыром. Если у вас есть свежий базилик, тогда добавляете его в уже готовую пасту.',
      favorites: true,
      id: 4
    }
  ],
  filter: 'all',
  search: ''
};

let itemId = 100;

const changeSearchFilter = (state, filterValue) => {
  return {
    ...state,
    search: filterValue
  }
}

const addRecipe = (state, recipe) => {
  const newItems = [...state.items, { ...recipe, id: ++itemId}]

  return {
    ...state,
    items: newItems
  }
}

const toggleRecipeFavoriteStatus = (state, recipeId) => {
  const newItems = [...state.items];

  newItems.forEach((item) => {
    if (item.id === recipeId) {
      item.favorites = !item.favorites
    }
  })

  return {
    ...state,
    items: newItems
  }
}

const changeFavoriteFilter = (state) => {
  const newFilterValue = state.filter === 'all' ? 'favorite' : 'all';

  return {
    ...state,
    filter: newFilterValue
  }
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'RECIPE_ADDED':
      return addRecipe(state, action.payload);

    case 'RECIPE_TOGGLE_FAVORITES':
      return toggleRecipeFavoriteStatus(state, action.payload);

    case 'SEARCH_FILTER_CHANGED':
      return changeSearchFilter(state, action.payload);

    case 'FAVORITE_FILTER_CHANGED':
      return changeFavoriteFilter(state);

    default:
      return state;
  }

}

export default reducer;
import callApi from '../../util/apiCaller';

export const ADD_RECIPES = 'ADD_RECIPES';

export function addRecipes(recipes) {
  return {
    type: ADD_RECIPES,
    recipes
  };
}

export function fetchRecipes() {
  return (dispatch) => {
    return callApi('recipes').then(res => {
      dispatch(addRecipes(res.recipes));
    });
  };
}


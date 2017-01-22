import { ADD_RECIPES } from './RecipeActions';

// Initial State
const initialState = { data: [] };

const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPES :
      return {
        data: action.recipes,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getRecipes = state => state.recipe.data;

// Export Reducer
export default RecipeReducer;
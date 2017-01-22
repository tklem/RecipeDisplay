import React, { PropTypes } from 'react';

// Import Style
import styles from './RecipeListItem.css';

function RecipeListItem(props) {
  return (
    <div>
      <h3>{props.recipe.name}</h3>
      <ul>
      {
        props.recipe.ingredients.map(ingredient => 
          <li>{ ingredient.text }</li>
        ))
      }
      </ul>
    </div>
  );
}

RecipeListItem.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      measure: PropTypes.string.isRequired,
      food: PropTypes.string.isRequired
    }))
  dispatch: PropTypes.func.isRequired,
};

export default PostListItem;

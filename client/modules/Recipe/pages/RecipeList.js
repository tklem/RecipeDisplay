import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { fetchRecipes } from '../../RecipeActions';

// Import Selectors
import { getRecipes } from '../../RecipeReducer';

class RecipeListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    return (
      <div className="listView">
        {
          props.recipes.map(recipe => (
            <RecipeListItem
              recipe={recipe}
            />
          ))
        }
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
RecipeListPage.need = [() => { return fetchRecipes(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    recipes: getRecipes(state),
  };
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      measure: PropTypes.string.isRequired,
      food: PropTypes.string.isRequired
    }))
  dispatch: PropTypes.func.isRequired,
};

RecipeList.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(RecipeListPage);

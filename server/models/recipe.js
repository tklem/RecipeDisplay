import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: { type: 'String', required: true },
  quantity: { type: 'Number', required: true },
  measure: { type: 'String', required: true },
  food: { type: 'String', required: true },
});


const recipeSchema = new Schema({
  name: { type: 'String', required: true },
  ingredients: [ingredientSchema]
});

export default mongoose.model('Recipe', recipeSchema);

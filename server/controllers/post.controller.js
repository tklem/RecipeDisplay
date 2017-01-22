import Recipe from '../models/recipe';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getRecipes(req, res) {
  Recipe.find().exec((err, recipes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ recipes });
  });
}


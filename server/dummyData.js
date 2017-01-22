import Recipe from './models/recipe';

export default function () {
  Recipe.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const entry1 = {
      name: "free-form apple tart",
      ingredients : [ {
          "text" : "1 sheet puff pastry",
          "quantity" : 1.0,
          "measure" : "sheet",
          "food" : "puff pastry",
        }, {
          "text" : "4-5 cooking apples",
          "quantity" : 4.5,
          "measure" : "apple",
          "food" : "apples",
        }, {
          "text" : "2 teaspoons flour, plus more to sprinkle",
          "quantity" : 2.0,
          "measure" : "tsp",
          "food" : "flour",
        }, {
          "text" : "2 teaspoons demerara (or brown) sugar, plus more to sprinkle",
          "quantity" : 2.0,
          "measure" : "tsp",
          "food" : "sugar",
        }, {
          "text" : "4-5 medium apples, peeled and sliced thinly",
          "quantity" : 4.5,
          "measure" : "medium",
          "food" : "apples",
        }, {
          "text" : "1 unwaxed lemon",
          "quantity" : 1.0,
          "measure" : "lemon",
          "food" : "lemon",
        }, {
          "text" : "2 tablespoons butter",
          "quantity" : 2.0,
          "measure" : "tbsp",
          "food" : "butter",
        }, {
          "text" : "1 egg white, beaten",
          "quantity" : 1.0,
          "measure" : "egg",
          "food" : "egg white",
        } ],
    };
  

    const recipe1 = new Recipe(entry1);

    Recipe.create([recipe1,], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}

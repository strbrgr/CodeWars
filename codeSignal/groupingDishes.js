/*
You are given a list dishes, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically, and the result array should be sorted lexicographically by the names of the ingredients.

Example

    For

      dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
                ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
                ["Quesadilla", "Chicken", "Cheese", "Sauce"],
                ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]

    the output should be

      solution(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                                ["Salad", "Salad", "Sandwich"],
                                ["Sauce", "Pizza", "Quesadilla", "Salad"],
                                ["Tomato", "Pizza", "Salad", "Sandwich"]]


                                */

function solution(dishes) {
  // object of ingredients
  var ingredients = {},
    // list of groups
    groups = [],
    dish,
    i,
    ingredient;

  // fill ingredient object
  for (dish of dishes) {
    for (i = 1; (ingredient = dish[i]); i++) {
      if (ingredients[ingredient]) {
        ingredients[ingredient].push(dish[0]);
      } else {
        ingredients[ingredient] = [dish[0]];
      }
    }
  }
  // filter ingredients by group length and sort dishes
  for (i in ingredients) {
    if (ingredients[i].length > 1) {
      groups.push([i, ...ingredients[i].sort()]);
    }
  }
  // return sorted list of groups
  return groups.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0]));
}

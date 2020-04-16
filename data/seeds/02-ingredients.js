
exports.seed = function(knex) {

      return knex('table_name').insert([
        {ingredient_name: 'rowValue1',
        quantity: "2",
        recipe_id: 1},
        {ingredient_name: 'rowValue2',
        quantity: "2",
        recipe_id: 2},
        {ingredient_name: 'rowValue3',
        quantity: "2",
        recipe_id: 3}
      ]);
};

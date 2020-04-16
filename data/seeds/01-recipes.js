
exports.seed = function(knex) {
      return knex('table_name').insert([
        {recipe_name: 'rowValue1'},
        {recipe_name: 'rowValue2'},
        {recipe_name: 'rowValue3'}
      ]);
    };
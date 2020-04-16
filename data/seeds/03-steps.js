
exports.seed = function(knex) {
      return knex("table_name").insert([
        {
          step_number: 1,
          instructions: "small dice onions and sweat",
          recipe_id: 1,
          ingredients_id: 5,
        },
        {
          step_number: 1,
          instructions: "small dice onions and sweat",
          recipe_id: 1,
          ingredients_id: 5,
        },
        {
          step_number: 1,
          instructions: "small dice onions and sweat",
          recipe_id: 1,
          ingredients_id: 5,
        },
      ]);
};

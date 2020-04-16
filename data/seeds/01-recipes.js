
exports.seed = function(knex) {
      return knex('table_name').insert([
        {colName: 'rowValue1'},
        {colName: 'rowValue2'},
        {colName: 'rowValue3'}
      ]);
    });
};

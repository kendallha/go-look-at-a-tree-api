
exports.up = function(knex) {
  return knex.schema
    .createTable('trees', function (table) {
      table.increments('id')
        .primary();
      table.string('name')
        .notNullable();
      table.string('scientific_name')
        .notNullable();
      table.string('region');
      table.string('average-height');
      table.string('lifespan');
      table.string('fact');
      table.string('image');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('trees')
};

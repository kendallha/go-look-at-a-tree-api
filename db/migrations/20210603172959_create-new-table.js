

exports.up = function(knex) {
  return knex.schema
    .createTable('trees', function (table) {
      table.increments('id')
        .primary();
      table.string('name')
        .notNullable();
      table.string('scientific_name')
        .notNullable().unique();
      table.string('region');
      table.string('average_height');
      table.string('lifespan');
      table.string('fact', 1000);
      table.string('image', 500);

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('trees')
};


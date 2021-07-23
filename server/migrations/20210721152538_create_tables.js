
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable();
    table.string('password');
    table.boolean('admin');
    table.timestamps(true, true)})
    .then(()=>{
     return knex.schema.createTable('exercises', (table) => {
        table.increments('id').primary();
        table.string('category');
        table.string('name').notNullable();
        table.string('description')})
    })
    .then(()=>{
      return knex.schema.createTable('user_workouts', (table) => {
        table.increments('id').primary();
        table.integer('userId').unsigned().notNullable();
        table.date('date')
        table.foreign('userId').references('id').inTable('users');})
    })
    .then(()=>{
      return knex.schema.createTable('workouts', (table) => {
        table.integer('workoutId').unsigned().notNullable();
        table.integer('exerciseId').unsigned().notNullable();
        table.integer('sets').notNullable();
        table.integer('reps').notNullable()
        table.foreign('workoutId').references('id').inTable('user_workouts');
        table.foreign('exerciseId').references('id').inTable('exercises');})
    })
    .then(()=>{
      return knex.schema.createTable('notes', (table) => {
        table.integer('workoutId').unsigned().notNullable();
        table.string('notes')
        table.string('mood')
        table.foreign('workoutId').references('id').inTable('user_workouts');})
    })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('notes')
   .then(() =>
   { return knex.schema.dropTableIfExists('workouts')})
  .then(() =>
  { return knex.schema.dropTableIfExists('exercises') })
  .then(() =>
  { return knex.schema.dropTableIfExists('user_workouts') })
  .then(() =>
  { return knex.schema.dropTableIfExists('users')});
};

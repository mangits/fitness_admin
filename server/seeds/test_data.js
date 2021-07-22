
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
      // Inserts seed entries
    .then(() => knex('users').insert([
      { id: 1, username: 'jj', email: 'James', password: 'blue' },
      { id: 2, username: 'kk', email: 'Katie', password: 'yellow' },
      { id: 3, username: 'bb', email: 'Brandon', password: 'red' },
 ]));
};

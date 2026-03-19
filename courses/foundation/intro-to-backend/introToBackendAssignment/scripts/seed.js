import knexLib from 'knex';

const knex = knexLib({
  client: 'sqlite3',
  connection: { filename: './users.sqlite3' },
  useNullAsDefault: true,
});

async function run() {
  // Create table if it doesn't exist
  const exists = await knex.schema.hasTable('users');
  if (!exists) {
    await knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email').unique();
      table.timestamp('confirmed_at').nullable();
      table.timestamp('created_at').nullable();
    });
    console.log('Created users table');
  } else {
    console.log('users table already exists');
  }

  // Clear existing rows and insert seed data
  await knex('users').del();

  const now = new Date();
  const users = [
    { first_name: 'Alice', last_name: 'Anderson', email: 'alice@example.com', confirmed_at: now.toISOString(), created_at: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 30).toISOString() },
    { first_name: 'Bob', last_name: 'Brown', email: 'bob@gmail.com', confirmed_at: null, created_at: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 20).toISOString() },
    { first_name: 'Carol', last_name: 'Clark', email: 'carol@gmail.com', confirmed_at: now.toISOString(), created_at: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 10).toISOString() },
    { first_name: 'Dave', last_name: 'Davids', email: 'dave@example.com', confirmed_at: null, created_at: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 5).toISOString() },
    { first_name: 'Eve', last_name: 'Evans', email: 'eve@example.com', confirmed_at: now.toISOString(), created_at: now.toISOString() },
  ];

  await knex('users').insert(users);
  console.log(`Inserted ${users.length} sample users`);

  await knex.destroy();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

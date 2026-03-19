export async function getAllUsers(knex) {
  return knex('users').select('*').orderBy('id', 'asc');
}

export async function getUserById(knex, id) {
  return knex('users').where({ id }).first();
}

export async function createUser(knex, user) {
  const [id] = await knex('users').insert(user);
  return getUserById(knex, id);
}

export async function updateUser(knex, id, changes) {
  await knex('users').where({ id }).update(changes);
  return getUserById(knex, id);
}

export async function deleteUser(knex, id) {
  return knex('users').where({ id }).del();
}

export async function countUsers(knex) {
  const rows = await knex('users').count({ total_users: '*' });
  // knex (sqlite) returns [{ total_users: 42 }]
  return rows[0];
}

export async function getUnconfirmedUsers(knex) {
  return knex('users').whereNull('confirmed_at').select('*');
}

export async function getGmailUsers(knex) {
  return knex('users').where('email', 'like', '%@gmail.com').select('*');
}

export async function getUsersByYear(knex, year) {
  const from = `${year}-01-01`;
  const to = `${year + 1}-01-01`;
  return knex('users').where('created_at', '>=', from).andWhere('created_at', '<', to).select('*');
}

export async function getFirstUser(knex) {
  return knex('users').orderBy('id', 'asc').first();
}

export async function lastNameCount(knex) {
  return knex('users').select('last_name').count('* as last_name_count').groupBy('last_name').orderBy('last_name', 'asc');
}

export async function searchUsers(knex, q) {
  if (!q) return [];
  const like = `%${q}%`;
  return knex('users')
    .where(function () {
      this.where('first_name', 'like', like)
        .orWhere('last_name', 'like', like)
        .orWhere('email', 'like', like);
    })
    .select('*')
    .orderBy('id', 'asc');
}

export async function recentUsers(knex, limit = 5) {
  return knex('users')
    .select('*')
    .orderBy('created_at', 'desc')
    .limit(limit);
}

export async function confirmUser(knex, id) {
  const now = new Date().toISOString();
  await knex('users').where({ id }).update({ confirmed_at: now });
  return getUserById(knex, id);
}

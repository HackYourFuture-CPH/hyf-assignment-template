export function up(knex) {
  return knex.schema.createTable("tokens", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table.string("token").notNullable().unique();
    table.datetime("expires_at").notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("tokens");
}

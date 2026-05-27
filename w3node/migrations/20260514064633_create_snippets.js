export function up(knex) {
  return knex.schema.createTable("snippets", (table) => {
    table.increments("id").primary();
    table.datetime("created_at").defaultTo(knex.fn.now());

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .integer("tag_id")
      .nullable()
      .references("id")
      .inTable("tags")
      .onDelete("SET NULL");

    table.string("title").notNullable();
    table.text("content").notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("snippets");
}

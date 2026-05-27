// Contents of database.js
import knex from "knex";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbFile = path.join(process.cwd(), "hyf_node.sqlite3");

try {
  // Check if file exists
  if (!fs.existsSync(dbFile)) {
    console.warn(`Database file ${dbFile} does not exist. Creating it.`);
  }
} catch (error) {
  console.error("Error checking database file:", error);
}

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, cb) => {
      conn.run("PRAGMA foreign_keys = ON", cb);
    },
  },
});
// Initialize tables if they don't exist
async function initializeTables() {
  try {
    // Create tags
    if (!(await knexInstance.schema.hasTable("tags"))) {
      await knexInstance.schema.createTable("tags", (table) => {
        table.increments("id").primary();
        table.string("name").unique().notNullable();
      });
      console.log("Tags table created");
    }
    // Create snippets
    if (!(await knexInstance.schema.hasTable("snippets"))) {
      await knexInstance.schema.createTable("snippets", (table) => {
        table.increments("id").primary();
        table.datetime("created_at").defaultTo(knexInstance.fn.now());
        table.integer("user_id").notNullable();
        table.integer("tag_id").nullable().references("id").inTable("tags");
        table.string("title").notNullable();
        table.text("content").notNullable();
      });
      console.log("Snippets table created");
    }
    // Create Users
    if (!(await knexInstance.schema.hasTable("users"))) {
      await knexInstance.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("username").notNullable().unique();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
        table.datetime("created_at").defaultTo(knexInstance.fn.now());
      });
      console.log("Users table created");
    }
  } catch (err) {
    console.error("Error initializing tables:", err);
    throw err; // Throw to prevent export if tables fail to create
  }
}
// Await initialization to ensure tables exist before export
await initializeTables();
export default knexInstance;

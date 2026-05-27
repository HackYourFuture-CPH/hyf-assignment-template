import knex from "knex";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbFile = path.join(process.cwd(), "hyf_node.sqlite3");

if (!fs.existsSync(dbFile)) {
  console.warn(`Database file ${dbFile} does not exist. Creating it.`);
}

const knexInstance = knex({
  client: "sqlite3",
  connection: { filename: dbFile },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, cb) => {
      conn.run("PRAGMA foreign_keys = ON", cb);
    },
  },
});

export default knexInstance;

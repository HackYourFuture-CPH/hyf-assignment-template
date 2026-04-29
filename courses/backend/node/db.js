import knex from 'knex';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const dbFile = join(__dirname, 'hyf_node_week1');
const config = isProduction
    ? {
        client: 'pg',
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        },
    }
    : {
        client: 'sqlite3',
        connection: {
            filename: process.env.DB_FILENAME || dbFile,
        },
        useNullAsDefault: true,
    };

const db = knex(config);

export default db;
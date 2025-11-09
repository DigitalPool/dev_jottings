import sqlite3 from "sqlite3";
import fs from 'node.fs';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupDb(fastify){
    const dbDir = path.resolve(__dirname, "data")
    if(!fs.existsSync(dbDir)){
        fs.mkdirSync(dbDir, {recursive: true});
    }

    const dbPath = path.join(dbDir, "db.sqlite")

    const db = new sqlite3.Database(dbPath, (err) => {
        if (err){
            console.error("Error creating Database: ", err.message)
            return
        }


        console.log("Connected to SQLite database.");

            // Players table
        db.run(`
        CREATE TABLE IF NOT EXISTS players (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            wins INTEGER DEFAULT 0,
            losses INTEGER DEFAULT 0,
            avatar TEXT DEFAULT 'avatar.png',
            preferred_language TEXT DEFAULT 'en',
            social_features_enabled BOOLEAN DEFAULT 1
        )
        `);

        // Sessions table
        db.run(`
        CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            token TEXT NOT NULL UNIQUE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES players(id) ON DELETE CASCADE
        )
        `);
    })
    fastify.decorate("SqliteDb", db);
}


// const dbname = "./backend/data/db.sqlite";

// //You create the table here, but you insert into the created table in the individual db files

// const db = new sqlite3.Database(dbname, (err) => {
// 	if (err) {
// 		console.error("Error setting up the database:", err);
// 	} else {
// 		console.log("Connected to database:", db);

// 		const createTableQuery = `
// 			CREATE TABLE IF NOT EXISTS items (
// 				id INTEGER PRIMARY KEY AUTOINCREMENT,
// 				name TEXT,
// 				description TEXT
// 			)
// 		`;

// 		db.run(createTableQuery, (err) => {
// 			if (err) {
// 				console.error(err.message);
// 			} else {
// 				console.log("Table created or already exists");
// 			}
// 		});
// 	}
// });

// module.exports = db;
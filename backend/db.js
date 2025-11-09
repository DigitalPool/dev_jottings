import sqlite3 from "sqlite3";
const dbname = "./backend/data/db.sqlite";

//You create the table here, but you insert into the created table in the individual db files

const db = new sqlite3.Database(dbname, (err) => {
	if (err) {
		console.error("Error setting up the database:", err);
	} else {
		console.log("Connected to database:", db);

		const createTableQuery = `
			CREATE TABLE IF NOT EXISTS items (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT,
				description TEXT
			)
		`;

		db.run(createTableQuery, (err) => {
			if (err) {
				console.error(err.message);
			} else {
				console.log("Table created or already exists");
			}
		});
	}
});

module.exports = db;
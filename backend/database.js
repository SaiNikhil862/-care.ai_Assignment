const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./health_wallet.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT)`);

  db.run(`CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    report_type TEXT,
    report_date TEXT,
    file_path TEXT)`);

  db.run(`CREATE TABLE IF NOT EXISTS vitals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    vital_type TEXT,
    value TEXT,
    recorded_at TEXT)`);

  db.run(`CREATE TABLE IF NOT EXISTS shares (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    report_id INTEGER,
    shared_with_email TEXT,
    role TEXT)`);
});

module.exports = db;
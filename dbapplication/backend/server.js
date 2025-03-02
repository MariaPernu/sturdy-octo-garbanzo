const sqlite3 = require("sqlite3").verbose();

// Luo tietokanta ja yhdistä siihen
const db = new sqlite3.Database("database.db", (err) => {
    if (err) return console.error(err.message);
    console.log("Yhdistetty SQLite-tietokantaan.");
});

// Luo taulu, jos sitä ei ole
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
)`);

// Lisää käyttäjä
const name = "Matti Meikäläinen";
const email = "matti@example.com";

db.run(
    `INSERT INTO users (name, email) VALUES (?, ?)`,
    [name, email],
    function (err) {
        if (err) return console.error(err.message);
        console.log(`Uusi käyttäjä lisätty, ID: ${this.lastID}`);
    },
);

// Sulje tietokantayhteys
db.close((err) => {
    if (err) return console.error(err.message);
    console.log("Tietokantayhteys suljettu.");
});

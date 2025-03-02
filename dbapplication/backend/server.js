const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware JSON-datan käsittelyyn
app.use(bodyParser.json());
app.use(express.static('public'));

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

// API-reitti uuden käyttäjän lisäämiseen
app.post("/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Nimi ja sähköposti vaaditaan" });
    }

    db.run(
        `INSERT INTO users (name, email) VALUES (?, ?)`,
        [name, email],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, name, email });
        },
    );
});

app.get("/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM users WHERE id = ?", [id], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: "User deleted", id });
    });
});

// Käynnistä palvelin
app.listen(PORT, () => {
    console.log(`Serveri käynnissä: http://localhost:${PORT}`);
});

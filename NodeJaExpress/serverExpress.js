const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Palvellaan staattisia tiedostoja
app.use(express.static(path.join(__dirname, 'public')));

// Reititetään juuripolku ja "kaikyhdeskoos.html" samaan tiedostoon
app.get(['/', '/index.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 käsittely
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

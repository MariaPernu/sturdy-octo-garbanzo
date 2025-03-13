import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Navigation = () => (
  <nav>
    <Link to="/">Tietoa</Link>
    <Link to="/harrastukset">Harrastukset</Link>
    <Link to="/yhteystiedot">Yhteystiedot</Link>
  </nav>
);

const Tietoa = () => (
  <section>
    <h1>Tietoa minusta</h1>
    <p>Hei! Olen teknologian innokas opiskelija ja luova ongelmanratkaisija.</p>
  </section>
);

const Harrastukset = () => (
  <section>
    <h1>Harrastukseni</h1>
    <p>Koodaan, pelaan videopelejä, kokkailen ja ulkoilen.</p>
  </section>
);

const Yhteystiedot = () => (
  <section>
    <h1>Yhteystiedot</h1>
    <p>📧 Sähköposti: sinun.sähköposti@esimerkki.com</p>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Esittelysivuni - Kaikki oikeudet pidätetään.</p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Tietoa />} />
        <Route path="/harrastukset" element={<Harrastukset />} />
        <Route path="/yhteystiedot" element={<Yhteystiedot />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


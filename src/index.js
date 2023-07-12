import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import APropos from "./pages/A-propos";
import FicheLogement from "./pages/Fiche-logement";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/reset.scss";
import "./style/colors.scss";
import "./style/typo.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route
          path="/fiche-logement/:logement-id"
          element={<FicheLogement />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import APropos from "./pages/A-propos";
import FicheLogement from "./pages/Fiche-logement";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route
          path="/fiche-logement/:logementId"
          element={<FicheLogement />}
        />
        <Route path="*" element={<Error />} status={404}  />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React from 'react';
import './fiche-logement.scss';
import Slideshow from '../../components/Slideshow';
import { useParams } from 'react-router-dom';
import rentals from '../../data/rentals.json';

const FicheLogement = () => {
  const { logementId } = useParams();
  const logement = rentals.find((rental) => rental.id === logementId);

  return (
    <section className="fiche-logement">
      <Slideshow />
      <div className="fiche-logement-description">
        <h2 className="fiche-logement-title">{logement.title}</h2>
        <p className="location">{logement.location}</p>
      </div>
      
    </section>
  );
};

export default FicheLogement;

import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import rentals from '../../data/rentals.json';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <Banner />
      <div className="cards-container">
        {rentals.map((rental) => (
          <Link
            key={rental.id}
            to={{
              pathname: `/fiche-logement/${rental.id}`,
              state: { logement: rental },
            }}
          >
            <Card title={rental.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;

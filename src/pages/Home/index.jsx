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
            className='card-link'
          >
            <Card title={rental.title} cover={rental.cover} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;

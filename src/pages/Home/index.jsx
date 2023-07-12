import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card"
import locations from "../../data/locations.json";
import "./home.scss"

const Home = () => {
    return <section className="home">
    <Banner />
    <div className="cards-container">
        {locations.map((location) => (
          <Card key={location.id} title={location.title} />
          
        ))}
    </div>
    </section>
}

export default Home
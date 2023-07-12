import React from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card"
import data from "../../data.json";
import "./home.scss"

const Home = () => {
    return <section className="home">
    <Banner />
    <div className="cards-container">
        {data.map((card) => (
          <Card key={card.id} title={card.title} />
          
        ))}
    </div>
    </section>
}

export default Home
import React, {useState} from 'react'
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

const APropos = () => {
    const [aPropos, setAPropos] = useState([
       { title: 'Fiabilité',
        content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes',
        open: true},
        { title: '',
        content: '',
        open: true},
        { title: '',
        content: '',
        open: true},
        { title: '',
        content: '',
        open: true},
    ])
    return (<section className="a-propos">
        <Banner />
        <div className="collapses-container">
            {aPropos.map((item, i) => (
                <Collapse item={item} index={i} />
            ))}
        </div>
        </section>)

}

export default APropos
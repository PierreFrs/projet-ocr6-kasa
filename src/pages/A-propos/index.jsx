import React, {useState} from 'react'
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import valeurs from "../../data/valeurs.json"
import "./a-propos.scss"

const APropos = () => {

    // Handle the dynamic display of the collapses infos from valeurs.json
    const [values, setValues] = useState(valeurs);
    // Handles the open value, takes "index" as an argument which corresponds to the element in the valeurs.json file
    const toggleCollapse = (index) => {
        // Iterates through the open elements of valeurs.json and set it to true if previously false and vice-versa
        setValues(values.map((value, i) => {
            if (i === index) {
                value.open = !value.open
            }
            return value;
        }))
    }

    return (<section className="a-propos page">
        <Banner />
        <div className="collapses-container">
            {values.map((value, i, title) => (
                <Collapse key={title + i} value={value} index={i} toggleCollapse={toggleCollapse} />
            ))}
        </div>
        </section>)

}

export default APropos
import React, {useState} from 'react'
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import valeurs from "../../data/valeurs.json"
import "./a-propos.scss"

const APropos = () => {
    const [values, setValues] = useState(valeurs);

    const toggleCollapse = (index) => {
        setValues(values.map((value, i) => {
            if (i === index) {
                value.open = !value.open
            }
            return value;
        }))
    }

    return (<section className="a-propos">
        <Banner />
        <div className="collapses-container">
            {values.map((value, i, title) => (
                <Collapse key={title + i} value={value} index={i} toggleCollapse={toggleCollapse} />
            ))}
        </div>
        </section>)

}

export default APropos
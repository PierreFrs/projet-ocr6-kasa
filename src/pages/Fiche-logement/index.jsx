import React, {useState} from 'react';
import './fiche-logement.scss';
import Slideshow from '../../components/Slideshow';
import { useParams } from 'react-router-dom';
import rentals from '../../data/rentals.json';
import Collapse from '../../components/Collapse';

const FicheLogement = () => {
  const { logementId } = useParams();
  const logement = rentals.find((rental) => rental.id === logementId);
  const descObj = {
    id: logement.id + '-desc',
    title: 'Description',
    content: logement.description,
    open: false,
  }

  const equipObj = {
    id: logement.id + '-equip',
    title: 'Equipments',
    content: logement.equipments,
    open: false,
  }

  const [infos, setInfos] = useState([descObj, equipObj]);

  const toggleCollapse = (index) => {
        setInfos(infos.map((info, i) => {
            if (i === index) {
                info.open = !info.open
            }
            return info;
        }))
    }

  return (
    <section className="fiche-logement">
      <Slideshow />
      <div className="fiche-logement-description">
        <div className="basic-info-container">
          <div className="title-location-badges-container">
            <h2 className="fiche-logement-title">{logement.title}</h2>
            <p className="location">{logement.location}</p>
            <div className="ratings-container">
              {logement.rating}
            </div>
          </div>
          
          <p className="host">{logement.host.name}</p>
          <div className="picture-container">
            <img src={logement.host.picture} alt="Portrait de l'hôte" />
          </div>
        </div>
        <div className="a-propos-collapses-container">
          {infos.map((info, index) => (
            <Collapse key={info.id} value={info} index={index} toggleCollapse={toggleCollapse} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FicheLogement;

import React, {useEffect, useState} from 'react';
import './fiche-logement.scss';
import Slideshow from '../../components/Slideshow';
import { useParams, useNavigate } from 'react-router-dom';
import rentals from '../../data/rentals.json';
import Collapse from '../../components/Collapse';
import activeStar from "../../assets/star-active.png"
import unActiveStar from "../../assets/star-inactive.png"

const FicheLogement = () => {
  // Retrieves where we are in the app
  const navigate = useNavigate();
  // Retrieves the rental URL ("/fiche-logement/:logementId")
  const { logementId } = useParams();
  // Finds a particular rental house with the id
  const logement = rentals.find((rental) => rental.id === logementId);

  // Id not found handling => redirects to the error page
 useEffect(() => {
    if (!logement) {
      navigate('/error');
    }
  }, [logement, navigate]);

  // Separate first name from last name
  const names = logement?.host.name.split(' ') || [];
  const firstName = names[0];
  const lastName = names[1];

  // Collapse data setting (could be in a separate json file but not worth it since it is small)
  // logement.id returns undefined if not found : "?" => avoid errors if logement is not found before DOM rendering
  const descObj = {
    id: logement?.id + '-desc',
    title: 'Description',
    content: logement?.description,
    open: false,
  }

  const equipObj = {
    id: logement?.id + '-equip',
    title: 'Equipments',
    content: logement?.equipments,
    open: false,
  }

  // Sets the right data wether it 's the desc or equip collapse
  const [infos, setInfos] = useState([descObj, equipObj]);
  // Function to open/close collapse
  const toggleCollapse = (index) => {
        setInfos(infos.map((info, i) => {
            if (i === index) {
                info.open = !info.open
            }
            return info;
        }))
    }

  // Function that converts ratings to stars. Takes rating as argument and convert it into active stars, calculate what is left as inactive stars and push them into the stars array
  const renderStars = (rating) => {
    const totalStars = 5;
    const activeStars = Math.round(rating);
    const inactiveStars = totalStars - activeStars;
    
    const stars = [];

    for (let i = 0; i < activeStars; i++) {
      stars.push(<img className='star' key={i} src={activeStar} alt="Active Star" />);
    }

    for (let i = 0; i < inactiveStars; i++) {
      stars.push(<img className='star' key={activeStars + i} src={unActiveStar} alt="Inactive Star" />);
    }

    return stars;
  };

  // Returns null and doesn't execute the rest of the code
  if (!logement) return null;

  return (
    <section className="fiche-logement page">
      <Slideshow />
      <div className="fiche-logement-description">
        <div className="basic-info-container">
          <div className="title-location-badges-container">
            <h2 className="fiche-logement-title">{logement.title}</h2>
            <p className="location">{logement.location}</p>
            <div className="badges-container">
              {logement.tags.map((tag, index) => <p key={index} className='badge'>{tag}</p>)}
            </div>
          </div>
          <div className="host-infos-container">
            <div className="host-container">
              <p className="host-name">
                <span className="host-first-name">{firstName}</span>
                <span className="host-last-name">{lastName}</span>
              </p>
              <div className="host-picture-container">
                <img src={logement.host.picture} alt="Portrait de l'hôte" className='host-picture'/>
              </div>
            </div>
          <div className="host-ratings-container">
            {renderStars(logement.rating)}
          </div>
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

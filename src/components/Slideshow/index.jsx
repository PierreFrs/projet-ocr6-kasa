import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rentals from '../../data/rentals.json';
import "./slideshow.scss"

const Slideshow = () => {

  const { logementId } = useParams();
  const logement = rentals.find((rental) => rental.id === logementId);

  const [pictureIndex, setPictureIndex] = useState(0);
  const [activePicture, setActivePicture] = useState(logement.pictures[0]);
  const picturesCount = logement.pictures.length;
  
  // Handle the prev and next buttons
  const nextPicture = () => {
    setPictureIndex((prevIndex) => (prevIndex + 1) % picturesCount);
    setActivePicture(logement.pictures[(pictureIndex + 1) % picturesCount]);
  };

  const prevPicture = () => {
    setPictureIndex((prevIndex) => (prevIndex - 1 + picturesCount) % picturesCount);
    setActivePicture(logement.pictures[(pictureIndex - 1 + picturesCount) % picturesCount]);
  };

 return (
    <div className='slideshow'>
      
      <div className="picture-container">
        <img src={activePicture} alt="" className='active-picture' />
      </div>
      {picturesCount > 1 ? <div className='picture-count'>{pictureIndex + 1}/{picturesCount}</div> : null}
      {picturesCount > 1 ? <div className='arrow-container arrow-container-previous' onClick={prevPicture}></div> : null}
      {picturesCount > 1 ? <div className='arrow-container arrow-container-next' onClick={nextPicture}></div> : null}
    </div>
  );
}

export default Slideshow
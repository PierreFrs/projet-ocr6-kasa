import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rentals from '../../data/rentals.json';
import "./slideshow.scss"

const Slideshow = () => {
  // Retrieves the rental URL ("/fiche-logement/:logementId")
  const { logementId } = useParams();
  // Finds a particular rental house with the id
  const logement = rentals.find((rental) => rental.id === logementId);

  // Sets the default index to 0 (first picture)
  const [pictureIndex, setPictureIndex] = useState(0);
  // Sets the default index for the active picture (visible) to the index 0 of the pictures array
  const [activePicture, setActivePicture] = useState(logement.pictures[0]);
  // 
  const picturesCount = logement.pictures.length;
  
  // Handle the prev and next buttons
  const nextPicture = () => {
    // Changes the current picture index
    // % guaranties that the index never goes above the picture count : when it reaches 0 (4 % 4 = 0), it loops => goes back to index 0. Since the left number is always < right number, it keeps the value of left number. (0 + 1) % 4 = 1, (1 + 1) % 4 = 2... (3 + 1) % 4 = 0 (first index)
    setPictureIndex((prevIndex) => (prevIndex + 1) % picturesCount);
    // Updates the picture in the UI, uses modulo too as a security
    setActivePicture(logement.pictures[(pictureIndex + 1) % picturesCount]);
  };

  const prevPicture = () => {
    // Same stuff but inverted (- 1). (0 - 1 + 4) % 4 = 3 (last index), (3 - 1 + 4) % 4 = 2
    setPictureIndex((prevIndex) => (prevIndex - 1 + picturesCount) % picturesCount);
    setActivePicture(logement.pictures[(pictureIndex - 1 + picturesCount) % picturesCount]);
  };

 return (
    <div className='slideshow'>
      
      <div className="picture-container">
        <img src={activePicture} alt="" className='active-picture' />
      </div>
      {/* Displays only if pictures > 1 */}
      {picturesCount > 1 ? <div className='picture-count'>{pictureIndex + 1}/{picturesCount}</div> : null}
      {picturesCount > 1 ? <div className='arrow-container arrow-container-previous' onClick={prevPicture}></div> : null}
      {picturesCount > 1 ? <div className='arrow-container arrow-container-next' onClick={nextPicture}></div> : null}
    </div>
  );
}

export default Slideshow
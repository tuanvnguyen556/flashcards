import React, {useState} from 'react';
import './Flashcard.css'
const Flashcard = ({isFlipped, setIsFlipped, front, back}) => {


  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (<>
    <div onClick={handleClick} className="container">
        <p>{isFlipped ? (back) : (front)}</p>
    </div>
  </>)
};

export default Flashcard;
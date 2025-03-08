import React, {useState} from 'react';
import './Flashcard.css'
const Flashcard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);
  return (<>
    <div onClick={handleClick} className="container">
        <p>{isFlipped ? (props.back) : (props.front)}</p>
    </div>
  </>)
};

export default Flashcard;
import React, {useState} from 'react';
import Flashcard from './Flashcard';
import './App.css'
const App = () => {
  const [count, setCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flashCards = [
    {question: 'French forward with jersey 7', answer: 'Antoine Griezmann'},
    {question: 'Slovenian goalkeeper with jersey 13', answer: 'Jan Oblak'},
    {question: 'Uruguay defender with jersey 2', answer: 'Jose Maria Gimenez'},
    {question: 'Belgian midfielder with jersey 20', answer: 'Axel Witsel'},
    {question: 'Argentinian defender with jersey 5', answer: 'Rodrigo De Paul'},
    {question: 'Spanish midfielder with jersey 6', answer: 'Koke'},
    {question: 'Argentinian forward with jersey 19', answer: 'Julian Alvarez'},
    {question: 'Argentinian forward with jersey 10', answer: 'Angel Correa'}
  ]
  const moveNext = () => {
    setIsFlipped(false);
    count + 1 == 8 ? setCount(0) : setCount(count + 1)
  };
 
  const movePrev = () => {
    setIsFlipped(false);
    count - 1 == -1 ? setCount(7) : setCount(count - 1)
  };
      return (
      <div>
        <div className="main-content">
          <h1 className="title">Althetico Madrid Trivia</h1>
          <h2 className="card-count">See how many Althetico Madrid players you know given the description</h2>
          <h2 className="card-count">Current Flashcard: {count + 1}</h2>
          <Flashcard isFlipped={isFlipped} setIsFlipped={setIsFlipped} front={flashCards[count].question} back={flashCards[count].answer}/>  
        </div>
        <div className="button-container">
          <button className="move-button" onClick={movePrev}>Prev</button>
          <button className="move-button" onClick={moveNext}>Next</button>
        </div>
        
      </div>)
};

export default App;
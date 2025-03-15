import React, {useState} from 'react';
import Flashcard from './Flashcard';
import './App.css'
const App = () => {
  const [count, setCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [flashCards, setFlashCards] = useState([
    {question: 'French forward with jersey 7', answer: 'Antoine Griezmann'},
    {question: 'Slovenian goalkeeper with jersey 13', answer: 'Jan Oblak'},
    {question: 'Uruguay defender with jersey 2', answer: 'Jose Maria Gimenez'},
    {question: 'Belgian midfielder with jersey 20', answer: 'Axel Witsel'},
    {question: 'Argentinian defender with jersey 5', answer: 'Rodrigo De Paul'},
    {question: 'Spanish midfielder with jersey 6', answer: 'Koke'},
    {question: 'Argentinian forward with jersey 19', answer: 'Julian Alvarez'},
    {question: 'Argentinian forward with jersey 10', answer: 'Angel Correa'}
  ]);

  const submitGuess = () => {
    const playerNameArray = flashCards[count].answer.toLowerCase().split(" ");
    let validAnswer = false;

    for (let i =0; i < playerNameArray.length; i++){
      if (playerNameArray[i] === answer){
        validAnswer = true;
      }
    }
    console.log(validAnswer);
    if (validAnswer){
      setCardColor("green-card");
      setTimeout(() => setCardColor("default-card"), 1000);
      moveNext();
    } else{
      setCardColor("red-card");
      setTimeout(() => setCardColor("default-card"), 1000);
    }

  }
  
  const handleInput = (e) => {
    setAnswer(e.target.value);
  }

  const shuffleCards = () => {
    setFlashCards((flashCards) => {
      let shuffled = [...flashCards];
      for (let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        console.log(shuffled[i])
      }
      return shuffled;
    });
  }

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
          <Flashcard isFlipped={isFlipped} setIsFlipped={setIsFlipped} front={flashCards[count].question} back={flashCards[count].answer} cardColor={cardColor}/>  
        </div>
        <div className="answer-container">
          <input className="input-answer" placeholder="type..." type="text" onChange={handleInput} name={answer} value={answer}/>
          <button className="move-button" onClick={submitGuess}>Submit Guess</button>
        </div>
        <div className="button-container">
          <button className="move-button" onClick={shuffleCards}>Shuffle</button>
          <button className="move-button" onClick={movePrev}>&#8592;</button>
          <button className="move-button" onClick={moveNext}>&#8594;</button>
        </div>
        
      </div>)
};

export default App;
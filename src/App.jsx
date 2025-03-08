import React, {useState} from 'react';
import Flashcard from './Flashcard';
const App = () => {
  const [count, setCount] = useState(0);
  const flashCards = [
    {question: 'what is 5 + 5', answer: '10'},
    {question: 'what is 2 + 5', answer: '7'},
    {question: 'what is 1 + 3', answer: '4'},
    {question: 'what is 2 + 4', answer: '6'},
    {question: 'what is 3 + 2', answer: '5'},
    {question: 'what is 4 + 1', answer: '5'},
    {question: 'what is 5 + 4', answer: '9'},
    {question: 'what is 6 + 5', answer: '11'}
  ]
  const moveNext = () => count + 1 == 8 ? setCount(0) : setCount(count + 1);
  console.log(count)
  const movePrev = () => count - 1 == -1 ? setCount(7) : setCount(count - 1);
      return (<div>
        <p>Current Flashcard: {count + 1}</p>
        <Flashcard front={flashCards[count].question} back={flashCards[count].answer}/>
        <button onClick={movePrev}>Prev</button>
        <button onClick={moveNext}>Next</button>
  </div>)
};

export default App;
import logo from './logo.svg';
import './output.css';
import  Questions  from './Questions.js'
import { useState } from 'react';

function App() {
  const randomIndex = (array) => (
    Math.floor(Math.random() * array.length)
  );

  const handleQuestionBtnClick = () => {
    setQuestionIndex(randomIndex(Questions));
    setAnswerIndex(undefined);
  }
  const [questionIndex, setQuestionIndex] = useState(randomIndex(Questions));
  const [answerIndex, setAnswerIndex] = useState();

  return (

    <div className="flex flex-col items-center p-8">
      <div className="text-xl underline font-bold">
     <h1>Quiz</h1>
     </div>
     <div>
      <h2>{Questions[questionIndex].question}</h2>
      <ol className="list list-decimal">
       {Questions[questionIndex].answers.map((answer, i) => (
       <li key={i} onClick={() => setAnswerIndex(i)}>{answer}</li>
        ))}
      </ol>
      </div>
      <button onClick={handleQuestionBtnClick} className="bg-gray-400 rounded-lg p-2">Next Question</button>
    <h1>{(answerIndex == 0) ? <p>CorrectAnswer!</p> : (answerIndex !== undefined && <p>Wrong Answer</p>)}</h1>
    </div>
  );
}

export default App;
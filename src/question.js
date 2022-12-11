import React, { useState } from 'react';

const Quiz = () => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const question = {
    text: 'Q. Which party won the Gujarat elections 2022 ?',
    choices: ['Bharatiya Janata Party', 'Indian National Congress', 'Aam Aadmi Party', 'All India Majlis-e-Ittehadul Muslimeen Party'],
    correctAnswer: 0
  };

  const handleAnswerClick = (chosenAnswer) => {
    setIsAnswerCorrect(chosenAnswer === question.correctAnswer);
    setIsTextVisible(true);
  }

  return (
    <>
     <div className='m-3 p-2  col-lg-12 col-md-6 '>
        <p className=" heading fw-bold">QUIZ</p>
        <div className='container-md '>
  
      {/* {isAnswerCorrect === null && ( */}
        <div>
          <p className='fs-1 fw-bold text-light '>{question.text}</p>
          <ul class="list-group text-dark w-50 mx-auto"> 
            {question.choices.map((choice, index) => (
              <li class="m-2 list-group-item rounded-1  fs-4" key={index} onClick={() => handleAnswerClick(index)}>
                {choice}
              </li>
            ))}
          </ul>
        </div>
      {/* )} */}
      {/* {isAnswerCorrect !== null && ( */}
        <div className='m-4 text-light'>
        {isTextVisible && <>
            <p className='fs-3 fw-bold'>Your answer is</p>
          {isAnswerCorrect ? ( <p className='fs-4 fw-bold'>Correct!</p> ) : (<p className='fs-4 fw-bold'>Incorrect</p>)}
          </>
        }
        </div>
      {/* )} */}
      </div>
    </div>
    </>
  );
};
export default Quiz
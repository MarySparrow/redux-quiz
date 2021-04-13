import React from 'react'
import { useSelector } from 'react-redux'
import './Summary.css'
// import summaryphoto from '../images/summaryphoto.png'

export const Summary = () => {
  const questionArray = useSelector((state) => state.quiz.questions)
  const answers = useSelector((state) => state.quiz.answers)

  const correctAnswersCount = answers.filter(answer => answer.isCorrect === true).length
  
  return (
    <div className="summary-container">
     <p>Great job!</p> 
     <p>You answered {correctAnswersCount} out of {questionArray.length} questions correctly!</p>
     {/* <img src={summaryphoto} className="summary-image" alt="group of foxes" /> */}
    </div>
  )

}


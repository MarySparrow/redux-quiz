import React from 'react'
import { useSelector } from 'react-redux'
import './Summary.css'

export const Summary = () => {
  const questionArray = useSelector((state) => state.quiz.questions)
  const answers = useSelector((state) => state.quiz.answers)

  const correctAnswersCount = answers.filter(answer => answer.isCorrect === true).length
  
  return (
    <div className="summary-container">
      <p>Great job!</p> 
      <p>You answered {correctAnswersCount} out of {questionArray.length} questions correctly!</p>
    </div>
  )

}


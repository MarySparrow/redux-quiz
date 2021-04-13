import React from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const questionArray = useSelector((state) => state.quiz.questions)
  const answers = useSelector((state) => state.quiz.answers)

  const correctAnswersCount = answers.filter(answer => answer.isCorrect === true).length
  
  return (
    <div>
     Great job, you answered {correctAnswersCount} out of {questionArray.length}questions correctly! 
    </div>
  )

}


/* eslint-disable arrow-parens */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const questionArray = useSelector((state) => state.quiz.questions)
  const answers = useSelector((state) => state.quiz.answers)

  const correctAnswersCount = answers.filter(answer => answer.isCorrect === true).length
  
  return (
    <div>
<<<<<<< HEAD
     !Great job, you answered {correctAnswersCount} out of {questionArray.length}questions correctly! 
=======
     Hello!Great job, you answered {correctAnswersCount} out of {questionArray.length}questions correctly! 
>>>>>>> Summary
    </div>
  )

}


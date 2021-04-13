import React from 'react'
import {useSelector} from 'react-redux'

export const ProgressBar = () => {
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const questionArray = useSelector((state) => state.quiz.questions)

  return (
      <div className='progress-bar'>
        Question: {currentQuestionIndex +1}/{questionArray.length}
      </div>
  )
}
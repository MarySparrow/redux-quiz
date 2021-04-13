import React from 'react'
import { useDispatch } from 'react-redux'

import {quiz} from '../reducers/quiz'

export const NextQuestionButton = () => {
  const dispatch = useDispatch() 
  const onSubmitAnswer = () => {
    dispatch(quiz.actions.goToNextQuestion()
  )}
  return (
    <button onClick= {onSubmitAnswer}>
      Next Question
    </button>
  )

}


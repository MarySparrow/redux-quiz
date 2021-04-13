import React from 'react'
import { useDispatch } from 'react-redux'

import {quiz} from '../reducers/quiz'

const dispatch = useDispatch() 

const onSubmitAnswer = () => {
  dispatch(quiz.actions.goToNextQuestion()
)}

export const NextQuestionButton = () => {
  return (
    <button onClick= {onSubmitAnswer}>
      Next Question
    </button>
  )

}


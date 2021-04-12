import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import {Summary} from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)

  const dispatch = useDispatch() 

  console.log(quizOver)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      { !quizOver ?
      <div>
        <h1>Question: {question.questionText}</h1>
        <button onClick= {() => dispatch(quiz.actions.goToNextQuestion())}>
          NEXT QUESTION
        </button>
      </div>
     : 
     <Summary />}
    </>
  )
}

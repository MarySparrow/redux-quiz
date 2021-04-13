import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import './CurrentQuestion.css'

import {Summary} from './Summary'
import {ProgressBar} from './ProgressBar'


export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const answers = useSelector((state) => state.quiz.answers)
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

  const dispatch = useDispatch() 

  const onSubmitAnswer = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  const onAnswerSelection = (index) => {
    dispatch(quiz.actions.submitAnswer( { questionId: question.id, answerIndex: index} ))
    console.log(index)
  } 
  
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  const generateClassNames = (index) => {
    if (answers[currentQuestionIndex]) {
      if (question.correctAnswerIndex === index) {
        return "correct"
      }
      else {
        return "incorrect"
      }
    }
    else {
      return "option-button"
    }
  }

  return (
    <>
      { !quizOver ?
      <div className='questions-card'>
        <div className="question-container">
          <ProgressBar />
          <h1 className='question'>{question.questionText}</h1>
        </div>
        <div className="options">
          {question.options.map((option, index) => 
          <button 
            className={generateClassNames(index)}
            disabled={answers.length === currentQuestionIndex + 1} 
            key ={option} 
            onClick={() => onAnswerSelection(index)}> {option} 
          </button> 
          )}
          <button className='next-question-button' onClick= {onSubmitAnswer}>
            Next Question
          </button>
        </div>
      </div>
     : 
     <Summary />}
    </>
  )
}

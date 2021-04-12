import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import {Summary} from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const answers = useSelector((state) => state.quiz.answers)
  const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

console.log(answers)
  const dispatch = useDispatch() 

  console.log(quizOver)


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
  if (answers[answers.length-1]){
    if (answers[answers.length-1].answerIndex === index && answers[answers.length-1].isCorrect){
      return 'correct'
    }
    
  } else {
    return ''
  }
  
 }


  return (
    <>
      { !quizOver ?
      <div>
        <h1>Question: {question.questionText}</h1>
        {question.options.map((option, index) => 
         <button 
          className={generateClassNames(index)}
          disabled={answers.length === currentQuestionIndex + 1} 
          key ={option} 
          onClick={() => onAnswerSelection(index)}> {option} 
         </button> 
        )}
        <button onClick= {onSubmitAnswer}>
          Check Answer
        </button>
      </div>
     : 
     <Summary />}
    </>
  )
}

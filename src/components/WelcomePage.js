import React, {useState} from 'react'

import { quiz } from '../reducers/quiz'
import { CurrentQuestion } from './CurrentQuestion'


export const WelcomePage = () => {

  const [startQuiz, setStartQuiz] = useState(false)

  const handleStartQuiz = () => {
    setStartQuiz(true)
  }
  return (
    <>
    { !startQuiz ?  
      <div>
        hello 
        <button onClick={ handleStartQuiz}> START QUIZ</button>
      </div>
    : 
    <CurrentQuestion /> }
  </>
  )
}

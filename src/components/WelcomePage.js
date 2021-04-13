/* eslint-disable object-curly-spacing */
import React, {useState} from 'react'

import { CurrentQuestion } from './CurrentQuestion'

export const WelcomePage = () => {
  const [startQuiz, setStartQuiz] = useState(false)
  
  const handleStartQuiz = () => {
    setStartQuiz(true)
  }
  
  return (
    <>
    { !startQuiz ?  
      <div className='welcome-container'>
        <div className="title">
          Quiz bout wonderful Foxes!
          Do you want to try it out?
        </div>
        <button onClick={ handleStartQuiz}> START QUIZ</button>
      </div>
    : 
    <CurrentQuestion /> }
  </>
  )
}

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
        <div className="text-container">
          <h1 className='title'>Quiz bout Foxes!</h1>
          <h2 className='sub-title'>Do you want to try it out?</h2>
        </div>
        <button className='start-button' onClick={ handleStartQuiz}> START QUIZ</button>
      </div>
    : 
    <CurrentQuestion /> }
  </>
  )
}

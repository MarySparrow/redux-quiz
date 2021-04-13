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
      <div>
        Hej 
        <button onClick={ handleStartQuiz}> START QUIZ</button>
      </div>
    : 
    <CurrentQuestion /> }
  </>
  )
}

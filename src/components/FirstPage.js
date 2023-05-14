import React from 'react'

export default function FirstPage(props) {
  return (
    <div className="wrapper">
    <img className="firstimg" src="blob1.png"/>
  <div className="wrapper-main">
    <h1>Quizzical</h1>
    <p> Some description if needed</p>
    <button onClick={props.toggle}> Start Quiz</button>
  </div>
 <img src="blob2.png" className="secondimg"/>
  </div> 
  )
}

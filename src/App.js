
import "./App.css";
import React from "react";




function App() {


const [question,setQuestions]=React.useState("")

React.useState(()=>{
  fetch("https://opentdb.com/api.php?amount=5").then(res=>res.json()).then(
    (json)=>{
      setQuestions(json)
    })

},[])

const[first,setfirst]=React.useState(true)


function toggle(){
  setfirst(false)
}




  return (
    <div className="wrapper">
      <img className="firstimg" src="blob1.png"/>
    <div className="wrapper-main">
      <h1>Quizzical</h1>
      <p> Some description if needed</p>
      <button > Start Quiz</button>
    </div>
   <img src="blob2.png" className="secondimg"/>
    </div> 




  );
}

export default App;

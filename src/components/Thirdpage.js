import React from 'react'
import { decode } from "html-entities";

export default function Thirdpage(props) {

const answers=props.answers[0]
const showanswers=answers.map((each,index)=>{


let style={backgroundColor:"black"}

    if(each.correct===true&&each.isclicked===true){

     style={backgroundColor: "#94D7A2" ,
       border:"0px solid black",
       borderRadius: "7.94239px",
       }
    }
    if(each.correct===true&&each.isclicked===false){

  style={backgroundColor: "#94D7A2" ,
        border:"0px solid black",
        borderRadius: "7.94239px",
        }
     }
     if(each.correct===false&&each.isclicked===true){

        style={backgroundColor: "#F8BCBC" ,
        border:"0px solid black",
        borderRadius: "7.94239px",
        }
     }
 
     if(each.correct===false&&each.isclicked===false){

       style={backgroundColor: "white" ,
        borderRadius: "7.94239px",
        }
     }




    return(<div className={'answer'+index} style={style}>{decode(each.answer)}</div> )
})







  return (
    <div className="innerSecondpagewrapper">
      <p>{decode(props.answers[0][props.answers[0].length-1].question)}</p>
     {showanswers}
     <div className="line"></div>
    </div>
  )
}

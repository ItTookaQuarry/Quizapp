import React from "react";
import { decode } from "html-entities";

export default function Secondpage(props) {


  let tab = [...props.incorrect, props.correct];

  const [Answers] = React.useState(() => {
    
      for (let i = 0; i < tab.length; i++) {
        let random = Math.floor(Math.random() * tab.length - 1);
        let spliced = tab.splice(random, 1);
        tab = [...tab, ...spliced];
      }
      let answers = [];
      for (let i = 0; i < tab.length; i++) {
        let iscorrect = tab[i] === props.correct ? true : false;

        let obj = {
          answer: tab[i],
          correct: iscorrect,
        };

        answers.push(obj);
      }
      return answers;
    
  });

  let a = Answers.map((each, index) => {


    let c =
      props.clicked[props.id][index] === false
        ? { backgroundColor: "white",
        borderRadius: "7.94239px", 
       }
        : { backgroundColor: "#D6DBF5" ,
        border:"0px solid black",
        borderRadius: "7.94239px"
      
      }; 

    return (
      <div
        className={"answer" + Answers.indexOf(each)}
        onClick={() => {
          props.change(Answers.indexOf(each), props.id,Answers,props.question);
        }}
        style={c}
      >
        {decode(each.answer)}
      </div>
    );
  });

  return (
    <div className="innerSecondpagewrapper">
      <p>{decode(props.question)}</p>
      {a}
      <div className="line"></div>
    </div>
  );
}

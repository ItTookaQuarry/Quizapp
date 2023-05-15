import "./App.css";
import React from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Thirdpage from "./components/Thirdpage";
function App() {
  const [question, setQuestions] = React.useState([]);

  React.useState(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((json) => {
        setQuestions(json);
      });
  }, []);

  const [first, setfirst] = React.useState(true);
  const [second, setsecond] = React.useState(false);
  const [third, setthird] = React.useState(false);

  function toggle() {
    if (question.length != 0) {
      isclicked(() => {
        const tab = [];
        for (let i = 0; i < question.results.length; i++) {
          let b = question.results[i].incorrect_answers.length + 1;
          let t = [];
          for (let j = 0; j < b; j++) {
            t.push(false);
          }
          tab.push(t);
        }
        return tab;
      });

      setfirst((prev) => !prev);
      setsecond((prev) => !prev);
      setsecondpage({ display: "grid" });
    }
  }

  const [submit, setsubmit] = React.useState(false);

  const [clicked, isclicked] = React.useState([]);

  const [UserCurrentAnswers, SetUserCurrentAnswers] = React.useState([
    [],
    [],
    [],
    [],
    [],
  ]);

  for (let i = 0; i < UserCurrentAnswers.length; i++) {
    if (third == true) {
      break;
    }
    if (submit == true) {
      break;
    }
    if (UserCurrentAnswers[i].length == 0) {
      break;
    }
    if (i == UserCurrentAnswers.length - 1) {
      setsubmit(true);
    }
  }

  function change(index, secondindex, answers, question) {
    const tab = answers.map((each) => {
      let correct = answers.indexOf(each) == index ? true : false;
      if (answers.indexOf(each) == answers.length - 1) {
        return { ...each, isclicked: correct, question: question };
      }
      return { ...each, isclicked: correct };
    });

    SetUserCurrentAnswers((prev) => {
      let nev = [...prev];

      nev[secondindex] = [];

      nev[secondindex].push(tab);

      return nev;
    });

    console.log(index);
    isclicked((prev) => {
      let table = [...prev];

      for (let i = 0; i < table[secondindex].length; i++) {
        if (i !== index) {
          table[secondindex][i] = false;
        }

        if (i == index) {
          table[secondindex][i] = true;
        }
      }

      return table;
    });
  }

  const [numberofcorrect, setnumberofcorrect] = React.useState(0);

  function thirdpage() {
    setsubmit((prev) => !prev);
    setthird((prev) => !prev);
    setsecond((prev) => !prev);

    const current = UserCurrentAnswers.map((each) => {
      let tab = [];
      for (let i = 0; i < each[0].length; i++) {
        if (each[0][i].correct==true&&each[0][i].isclicked==true) {
          tab.push(1);
        }
        

      }
      return tab;
    });
console.log(current)
    setnumberofcorrect((prev)=>{
      let number=prev

      for(let i=0;i<current.length;i++){
        if(current[i].length==1){
          number = number +1
       }


      }



return number


    })
  }
  console.log(UserCurrentAnswers);
  let [secondpage, setsecondpage] = React.useState({ display: "none" });
  return (
    <>
    <div>123</div>
      {first && question && <FirstPage toggle={toggle} />}
      <div className="wraper" style={secondpage}>
        {question.results &&
          second &&
          question.results.map((each) => {
            return (
              <SecondPage
                correct={each.correct_answer}
                incorrect={each.incorrect_answers}
                question={each.question}
                id={question.results.indexOf(each)}
                key={question.results.indexOf(each)}
                change={change}
                clicked={clicked}
              />
            );
          })}

        {third &&
          UserCurrentAnswers.map((each) => {
            return <Thirdpage answers={each} />;
          })}
          
        {third && (
         <div className="score"> <p className="p">You have {numberofcorrect} correct answers</p>
          <button
            className="button1"
            onClick={() => window.location.reload(false)}
          >
           Try again
          </button></div>
        )}
        <img src="blob3.png" className="second" />
        {submit && (
          <button className="button" onClick={thirdpage}>
            Check answers
          </button>
        )}
      </div>
    </>
  );
}

export default App;

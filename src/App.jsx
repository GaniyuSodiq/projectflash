import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([
    { id: 1, question: "what is access", answer: "Access is a bank" },
    { id: 2, question: "what is First", answer: "Access is a First bank" },
    { id: 3, question: "what is Diamond", answer: "Access is a diamond bank" },
  ]);

  return (
    <>
      {/* INTRO SECTION */}
      <h1>🃏 Fash Card NG 🧠</h1>
      <h2>why flash card intro</h2>
      <h3>why flash more intro</h3>

      {/* FORM SECTION */}
      <form className="question-form">
        <label>
          Question <br></br>
          <input />
          <br></br>
        </label>
        <label>
          Answer <br></br>
          <input />
        </label>
      </form>

      {/* QNA DISPLAY SECTION */}
      <div className="qbox-container">
        {questions.map((q) => (
          <div key={q.id} className="q-box">
            {q.question}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

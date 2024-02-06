import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([
    { id: 1, questions: "what is access", answer: "Access is a bank" },
    { id: 2, questions: "what is First", answer: "Access is a First bank" },
    { id: 3, questions: "what is Diamond", answer: "Access is a diamond bank" },
  ]);
  return (
    <>
      <h1>Hello Sodiq</h1>
    </>
  );
}

export default App;

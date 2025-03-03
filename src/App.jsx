import { useState } from "react";
import "./App.css";
import learnersData from "./data/learnersData";
import Learner from "./components/Learner";

function App() {
  const [learners] = useState(learnersData);
  return (
    <>
      {learners.map((person, index) => (
        <Learner key={index} learner={person} />
      ))}
    </>
  );
}

export default App;

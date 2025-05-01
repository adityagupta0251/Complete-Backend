import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  // Add dependency array to useEffect to run only once
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // 🛠 Fix: Added empty dependency array

  return (
    <>
      <h1>Chai Aur Backend | NextgenDev Youtube</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id || index}>
          {" "}
          {/* 🛠 Fix: Use `joke.id` not `jokes.id` */}
          <h3>{joke.question}</h3> {/* 🛠 Fix: Use `joke`, not `jokes` */}
          <p>{joke.answer}</p>
        </div>
      ))}
    </>
  );
}

export default App;

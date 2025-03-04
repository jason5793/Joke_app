import React, { useState } from "react";
import Button from "./Button";
import "./Joke.css";
const Joke = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((res) => res.json()) // Parse response as JSON
      .then((data) => {
        if (data.type === "single") {
          setJoke(data.joke); // Single-line joke
        } else {
          setJoke(`${data.setup} - ${data.delivery}`); // Two-part joke
        }
      })
      .catch((error) => console.error("Error fetching joke:", error));
  };
  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke || "Click the button to get a joke!"}</p>
      <Button />
    </div>
  );
};

export default Joke;

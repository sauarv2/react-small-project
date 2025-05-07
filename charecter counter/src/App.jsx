import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [character, setCharacter] = useState(0);
  const [sentences, setSentences] = useState(0);

  function handleTextChange(e) {
    const words = e.target.value;
    setWord(words);
    const totalchecter = words.replace(/\s+/g, "");
    setCharacter(totalchecter.length);

    const sentences = word
      .trim()
      .split(/[.!?;](\s|$)/)
      .filter((sentence) => sentence.trim().length > 0);
    setSentences(sentences.length);
  }

  return (
    <>
      <div className="Container">
        <div className="Container_middle">
          <div className="right">
            <textarea
              className="text-input"
              value={word}
              onChange={handleTextChange}
              rows="6"
              placeholder="Type or paste your text here..."
            />
            <div className="button_div">
              <button className="button-65">Delete</button>
            </div>
          </div>

          <div className="left">
            <div className="Container_middle_para">
              <h1>Results</h1>
            </div>

            <div class="flex-container">
              <div>
                {" "}
                <p>
                  <strong>Characters:</strong>
                  {character}
                </p>
              </div>
              <div>
                {" "}
                <p>
                  <strong>Sentences:</strong>
                  {sentences}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

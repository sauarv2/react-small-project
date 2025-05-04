import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("message");

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      setMessage("Please enter a valid weight and height");
    } else {
      let bmi = weight / Math.pow(height / 100, 2);
      setBmi(bmi.toFixed(1));
    }
  };
  return (
    <>
      <div className="app">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form>
            <div>
              <label>Weight (lbs)</label>
              <input
                type="text"
                placeholder="Enter Weight value"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Height (in)</label>
              <input
                type="text"
                placeholder="Enter height value"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit" onClick={calcBmi}>
                Submit
              </button>
              <button
                className="btn btn-outline"
                // onClick={calcBmi}
                type="submit"
              >
                Reload
              </button>
            </div>
          </form>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

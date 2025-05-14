import { useState } from "react";

import "./App.css";

function App() {
  const [principal, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [calcint, setCalcint] = useState(0);

  function calcSum(e) {
    e.preventDefault();

    if (principal > 0 && interest > 0 && year > 0) {
      let Add =
        (parseInt(principal) * parseInt(interest) * parseInt(year)) / 100;
      console.log(typeof Add);
      setCalcint(parseInt(Add));
    } else {
      alert("please input something");
    }

    if (principal < 0 || interest < 0 || year < 0) {
      setPrinciple(principal);
      setInterest(0);
      setYear(0);
    }
  }

  return (
    <>
      <div className="container">
        <h1>Simple Interest Calculator</h1>
        <form id="interestForm" onSubmit={calcSum}>
          <label htmlFor="principal">Principal Amount (₹):</label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrinciple(e.target.value)}
            required
          />

          <label htmlFor="rate">Rate of Interest (%):</label>
          <input
            type="number"
            id="rate"
            value={interest}
            onChange={(e) => {
              setInterest(e.target.value);
            }}
            required
          />

          <label htmlFor="years">Number of Years:</label>
          <input
            type="number"
            id="years"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
            required
          />

          <button type="submit">Calculate Interest</button>
        </form>

        <div id="result">{calcint}</div>
      </div>
    </>
  );
}

export default App;

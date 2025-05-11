import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [exchangeRate, setExchangeRate] = useState(null); // Initialize as null
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [conversionRate, setConversionRate] = useState(0);

  useEffect(() => {
    const apiurl = `https://v6.exchangerate-api.com/v6/910c1c7c735edd69060daa5d/latest/${fromCurrency}`;

    axios
      .get(apiurl)
      .then((res) => {
        setExchangeRate(res.data.conversion_rates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fromCurrency]);

  useEffect(() => {
    if (exchangeRate && exchangeRate[toCurrency]) {
      setConversionRate((amount * exchangeRate[toCurrency]).toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, exchangeRate]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "amount":
        setAmount(value);
        break;
      case "from-currency":
        setFromCurrency(value);
        break;
      case "to-currency":
        setToCurrency(value);
        break;
      default:
        break;
    }
  };

  if (!exchangeRate) {
    return <div className="container">Failed to load exchange rates</div>;
  }

  return (
    <div className="container">
      <div className="currency-container">
        <h1>
          Currency
          <br />
          Converter
        </h1>
        <div className="input-box">
          <label htmlFor="amount">Enter amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            id="amount"
            placeholder="100"
            required
            onChange={onHandleChange}
          />
        </div>
        <div className="currency">
          <div className="box">
            <select
              className="select-option"
              name="from-currency"
              id="fromCurrency"
              value={fromCurrency}
              onChange={onHandleChange}
            >
              {exchangeRate &&
                Object.keys(exchangeRate).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <span>TO</span>
          </div>
          <div className="box">
            <select
              className="select-option"
              name="to-currency"
              id="toCurrency"
              value={toCurrency}
              onChange={onHandleChange}
            >
              {exchangeRate &&
                Object.keys(exchangeRate).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </select>
          </div>
          <div className="convert">
            {conversionRate} {toCurrency}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

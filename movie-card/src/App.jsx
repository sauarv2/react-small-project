import { useState } from "react";
import "./App.css";
import Netflixx from "./Components/Netflix";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Netflixx />
    </>
  );
}

export default App;

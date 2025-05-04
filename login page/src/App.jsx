import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="logo-box">
      <img src="./logo.png" className="logo" />
      <h2>Sign In to Twitter</h2>
      <button>
        <img src="./google.png" />
        Sign in with Google
      </button>
      <button>
        <img src="./apple.png" />
        Sign in with Apple
      </button>
      <hr></hr>
      <span>Or</span>
      <form>
        <input type="text" placeholder="Phone email or username" />
        <button>Next</button>
      </form>
      <button>Forget Password</button>
      <p>
        Don't Have an account<a>Sign up</a>
      </p>
    </div>
  );
}

export default App;

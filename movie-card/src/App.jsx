import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="movie-card">
        <div
          className="poster"
          style="background-image: url('https://via.placeholder.com/300x450');"
        ></div>
        <div className="card-content">
          <div className="movie-title">Inception</div>
          <div className="genre">Action, Sci-Fi, Thriller</div>
          <div className="rating">⭐ 8.8/10</div>
        </div>
      </div>
    </>
  );
}

export default App;

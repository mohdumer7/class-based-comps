import React from "react";
import MovieCard from "./MovieCard";
import "./index.css";
class App extends React.Component {
  render() {
    return (
      <>
        <h1>Class Component</h1>
        <MovieCard />
      </>
    );
  }
}

export default App;

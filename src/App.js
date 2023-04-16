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
// This is the wau to send default props
// MovieCard.defaultProps = {
//   name:"avengers"
// }
export default App;

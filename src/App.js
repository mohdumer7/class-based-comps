import React from "react";
import MovieCard from "./MovieCard";
import "./index.css";
class App extends React.Component {
  constructor() {
    super();
  }

  static getDerivedStateProps() {}

  componentDidMount() {
    // here is all the fetch calls takes place in the componentdid mount phase.
    //happens only once
  }

  shouldComponentUpdate() {
    //change in state and props trigger rerender?
    //returns a bool value if render must rerun or not
  }

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <MovieCard />
      </>
    );
  }

  getSnapshotBeforeUpdate() {
    //sends a snapshot to component did update
  }

  componentDidUpdate() {
    // runs after component updates
    //happens after each render call
  }
}

// This is the wau to send default props
// MovieCard.defaultProps = {
//   name:"avengers"
// }
export default App;

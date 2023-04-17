import React from "react";
import MovieCard from "./MovieCard";
import "./index.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      card: true,
    };
  }

  // prettier-ignore
  // eslint-disable
  /////////////////////////////////////////////////////////////////////////////////////////
  //[ERROR BOUNDRY]                                                                     ///
  //these are the error or fall back functions for lifecycle methods                    ///
  static getDerivedStateFromError(err) {                                                ///
    //error in props and state                                                          ///
    //you fallback URL to be safe                                                       ///
    return err;                                                                         ///
  } ///
  ///
  componentDidCatch(error) {
    ///
    // error in component mounts                                                        ///
    //you fallback URL to be safe                                                       ///
    return error; ///
  } ///
  //This has to be above here so that it can handle athe error boundries for the        ///
  //children bleow it                                                                   ///                     ///
  /////////////////////////////////////////////////////////////////////////////////////////
  // prettier-ignore

  static getDerivedStateFromProps(props, state) {
    console.log(
      "Please Welcome the Component getting the props and state ready"
    );
    //NO SIDE EFFECTS
    //NO SETSTATE
    return null;
  }

  componentDidMount() {
    console.log("ssup bois..here i am [MOUNTED]");
    // here is all the fetch calls takes place in the componentdid mount phase.
    //happens only once
    //NO SIDE EFFECTS
    //NO SETSTATE
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("Should i Update....?");
    //change in state and props trigger rerender?
    //returns a bool value if render must rerun or not
    return true;
  }
  updateme() {
    this.setState({ count: 1 });
  }

  unmountCard() {
    this.setState((prevstate) => ({ card: !prevstate.card }));
  }

  render() {
    console.log("i am Rendering....");

    return (
      <>
        <h1>Class Component</h1>
        <button onClick={this.updateme.bind(this)}>update me</button>
        <button onClick={this.unmountCard.bind(this)}>
          mount/unmount this card
        </button>
        {this.state.card ? <MovieCard /> : null}
      </>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Hmmm....lemme Get the snapshot of this update");
    //sends a snapshot to component did update
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("Looks like the component just got updated..DAMN!!");
    // runs after component updates
    //happens after each render call
  }

  componentWillUnmount() {
    console.log("Thanks For Having me...Thats my Time [UNMOUNTED]");
    //this is called before the component unmounts to do some cleanup work
    //NO SIDE EFFECTS
    //NO SETSTATE
    return null;
  }
}

// This is the wau to send default props
// MovieCard.defaultProps = {
//   name:"avengers"
// }
export default App;

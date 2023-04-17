import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and him alien army from enslaving humanity",
      price: 199,
      rating: 8.9,
      stars: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "----MOVIECARD----Please Welcome the Component getting the props and state ready"
    );
    //NO SIDE EFFECTS
    //NO SETSTATE
    return null;
  }

  componentDidMount() {
    console.log("----MOVIECARD----ssup bois..here i am [MOUNTED]");
    // here is all the fetch calls takes place in the componentdid mount phase.
    //happens only once
    //NO SIDE EFFECTS
    //NO SETSTATE
  }

  shouldComponentUpdate() {
    console.log("----MOVIECARD----Should i Update....?");
    //change in state and props trigger rerender?
    //returns a bool value if render must rerun or not
    return true;
  }

  //this.props is available everytwhere
  increaseStars() {
    this.setState({ stars: this.state.stars + 1 });
  }

  decreaseStars() {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState({ stars: this.state.stars - 1 });
  }

  render() {
    return (
      <div className="main">
        {/**Movie Card */}
        <div className="movie-card">
          {/**Left section of Movie Card */}
          <div className="left">
            <img
              alt="poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            />
          </div>

          {/**Right section Movie Card */}
          <div className="right">
            {/**Title, plot, price of the movie */}
            <div className="title">{this.state.title}</div>
            <div className="plot">{this.state.plot}</div>
            <div className="price">Rs. {this.state.price}</div>

            {/**Footer starts here with ratings, stars and buttons */}
            <div className="footer">
              <div className="rating">{this.state.rating}</div>

              {/**Star image with increase and decrease buttons and star count */}
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="Decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  onClick={this.decreaseStars.bind(this)}
                />
                <img
                  className="stars"
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                  onClick={this.increaseStars.bind(this)}
                />
                <span className="starCount">{this.state.stars}</span>
              </div>

              {/**Favourite and add to cart buttons */}
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getSnapshotBeforeUpdate() {
    console.log(
      "----MOVIECARD----Hmmm....lemme Get the snapshot of this update"
    );
    //sends a snapshot to component did update
    return null;
  }

  componentDidUpdate() {
    console.log(
      "----MOVIECARD----Looks like the component just got updated..DAMN!!"
    );
    // runs after component updates
    //happens after each render call
  }

  componentWillUnmount() {
    console.log(
      "----MOVIECARD----Thanks For Having me...Thats my Time [UNMOUNTED]"
    );
    //this is called before the component unmounts to do some cleanup work
    //NO SIDE EFFECTS
    //NO SETSTATE
    return null;
  }
}

export default MovieCard;

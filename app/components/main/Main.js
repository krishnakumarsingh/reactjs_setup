import React from "react";
import Carousel from "../Carousel";
import ArrowItems from "../ArrowItems";
import Cards from "../Cards";

const img = require('../../images/1.jpg');
class Main extends React.Component{

    constructor(props) {
        super(props);
    }

	render(){return(
  		<main role="main" className="col main">
        <Carousel />
        <ArrowItems />
        <div className="container">
          <div className="jumbotron">
            <h1>Book lab test online.</h1>
            <p className="lead">Most simple way to book your labrotory test and get online report on your mobile or desktop.</p>
            <p>
              <a className="btn btn-success" href="booking_choice.html" role="button">Book Now</a>
            </p>
          </div>
          <div className="row">
            <div className="col-4">
              <Cards />
            </div>
            <div className="col-4">
              <Cards />
            </div>
            <div className="col-4">
              <Cards />
            </div>
          </div>
        </div>
        <br/>
      </main>
  	)
  }
}
Main.defaultProps = {  
    firstNameProp: "Hello",  
    lastnameProp: "World"  
} 
export default Main

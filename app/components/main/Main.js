import React from "react";

const cardStyle = {"width": "20rem"};
class Main extends React.Component{

    constructor(props) {
        super(props);
    }

	render(){return(
    		<main role="main" className="col">
          <div id="demo" className="carousel slide row" data-ride="carousel">

            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="data:image/png;base64,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" alt="Los Angeles" width="100%" height="500" />
              </div>
              <div className="carousel-item">
                <img src="data:image/png;base64,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" alt="Chicago" width="100%" height="500" />
              </div>
              <div className="carousel-item">
                <img src="data:image/png;base64,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" alt="New York" width="100%" height="500" />
              </div>
            </div>
            
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>

          <div className="jumbotron">
            <h1>Book lab test online.</h1>
            <p className="lead">Most simple way to book your labrotory test and get online report on your mobile or desktop.</p>
            <p>
              <a className="btn btn-success" href="booking_choice.html" role="button">Book Now</a>
            </p>
          </div>
          <div className="row">
            <div className="card" style={cardStyle}>
              <img className="card-img-top" src="1.jpg" alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </main>

    	)
    }
}
Main.defaultProps = {  
    firstNameProp: "Hello",  
    lastnameProp: "World"  
} 
export default Main

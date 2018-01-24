import React from "react";

class Cards extends React.Component{

	constructor(props) {
    	super(props);
 	}

	render(){
    	return(
        <div className="card tm-card">
          <img className="card-img-top" src={require('../../images/banner-1.jpg')} width="100%" height="200" alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-success"><del className="oldPrice">1,400/-</del> Now <span className="newPrice">800/-</span>Book</button>
          </div>
        </div>
    	)
    }
}

export default Cards

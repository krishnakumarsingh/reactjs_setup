import React from "react";

class Cards extends React.Component{

	constructor(props) {
    	super(props);
 	}

	render(){
    	return(
    		<div className="card-container">
          <div className="card">
            <div className="side">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="side back">Jimmy Eat World</div>
          </div>
		    </div>
    	)
    }
}

export default Cards
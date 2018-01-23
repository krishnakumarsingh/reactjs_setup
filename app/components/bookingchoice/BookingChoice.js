import React from "react";
import Cards from "../Cards";

class BookingChoice extends React.Component{

	constructor(props) {
    	super(props);
 	}

	render(){
    	return(
    		<main role="main" className="col main">
		        <div className="container">
		          <div className="jumbotron">
		            <h1>Select your choice.</h1>
		            <p className="lead">Most simple way to book your labrotory test and get online report using your mobile or desktop.</p>
		          </div>
		          <div className="row">
		            <div className="col-4">
		              	<div className="card-container">
				          <div className="card">
				            <div className="side">
				              <h4 className="card-title">Card title</h4>
				              <p className="card-text">To upload your Doctor Prescription.</p>
				            </div>
				            <div className="side back">Jimmy Eat World</div>
				          </div>
					    </div>
		            </div>
		            <div className="col-4">
		              	<div className="card-container">
				          <div className="card">
				            <div className="side">
				              <h4 className="card-title">Card title</h4>
				              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				            </div>
				            <div className="side back">Jimmy Eat World</div>
				          </div>
					    </div>
		            </div>
		            <div className="col-4">
		              	<div className="card-container">
				          <div className="card">
				            <div className="side">
				              <h4 className="card-title">Card title</h4>
				              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				            </div>
				            <div className="side back">Jimmy Eat World</div>
				          </div>
					    </div>
		            </div>
		          </div>
		        </div>
		        <br/>
		    </main>
    	)
    }
}

export default BookingChoice
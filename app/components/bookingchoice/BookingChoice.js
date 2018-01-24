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

export default BookingChoice

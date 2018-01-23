import React from "react";
import Logo from '../logo';
import Nav from '../nav';
import Main from '../main';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Root extends React.Component{

	constructor(props) {
    	super(props);
 	}

	render(){
    	return(
    		<div className="collapse navbar-collapse d-inline-block">
          <ul className="navbar-nav mr-auto float-right">
            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/PreventiveHealthPackage">PreventiveHealthPackage</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/AboutThinkMobi">AboutThinkMobi</Link></li>
          </ul>
			 </div>
    	)
    }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
export default Root
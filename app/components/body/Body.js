import React from "react";
import Logo from '../logo';
import Nav from '../nav';
import Main from '../main';
import BookingChoice from '../bookingchoice';
import SelectChoice from '../selectchoice';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Body extends React.Component{

	constructor(props) {
    	super(props);
 	}

	render(){
    	return(
			<Router>
				<div className="w-100">
					<Nav navLi={this.props.navLi}/>
			        <Route exact path="/" component={Home}/>
	                <Route path="/Pricing" component={Pricing}/>
	                <Route path="/PreventiveHealthPackage" component={PreventiveHealthPackage}/>
	                <Route path="/Login" component={Login}/>
	                <Route path="/AboutThinkMobi" component={AboutThinkMobi}/>
	    			<Route path="/SelectChoice" component={SelectChoice}/>
	            </div>
	        </Router>
    	)
    }
}
const Home = () => (
	<Main />
)

const Pricing = () => (
    <BookingChoice />
)

const PreventiveHealthPackage = () => (
    <h2>PreventiveHealthPackage</h2>
)

const Login = () => (
    <h2>Login</h2>
)
const AboutThinkMobi = () => (
    <h2>AboutThinkMobi</h2>
)


export default Body
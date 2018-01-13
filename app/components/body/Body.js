import React from "react";
import Logo from '../logo';
import Nav from '../nav';

class Body extends React.Component{

	constructor(props) {
    	super(props);
 	}

	render(){
    	return(
    		<div>
				<header className="masthead">
					<Logo  />
					
					<Nav navLi={this.props.navLi}/>
				
				</header>
			</div>
    	)
    }
}
export default Body
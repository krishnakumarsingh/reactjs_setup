import React from "react";
import Logo from '../logo';
import Nav from '../nav';
import Main from '../main';

class Body extends React.Component{

	constructor(props) {
    	super(props);
 	}

	render(){
    	return(
    		<div className="w-100">
				<header className="masthead">
					
					<Nav navLi={this.props.navLi}/>
				
				</header>
				<Main />
			</div>
    	)
    }
}
export default Body
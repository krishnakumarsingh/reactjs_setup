import React from "react";

const styleT = {"color":"#006"};

const stylehink = {"color":"#F30"};

class Body extends React.Component{

	constructor(props) {
    	super(props);
	    this.state = {
	      body: "State Hello",
	    };
 	}

	render(){
		const { body } = this.state;
    	return(
			<header className="masthead">
				<h3 className="text-muted"><span style={styleT}>T</span><span style={stylehink}>hink<em>M</em>obi</span></h3>

				<nav className="navbar navbar-expand-md navbar-light bg-light rounded mb-3">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
					  aria-expanded="false" aria-label="Toggle navigation">
					  <span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
					  <ul className="navbar-nav text-md-center nav-justified w-100">
						<li className="nav-item active">
						  <a className="nav-link" href="#">Home
							<span className="sr-only">(current)</span>
						  </a>
						</li>
						<li className="nav-item">
						  <a className="nav-link" href="#">Pricing</a>
						</li>
						<li className="nav-item">
						  <a className="nav-link" href="#">Preventive Health Package</a>
						</li>
						<li className="nav-item">
						  <a className="nav-link" href="#">login</a>
						</li>
						<li className="nav-item">
						  <a className="nav-link" href="#">About ThinkMobi</a>
						</li>
					  </ul>
					</div>
				</nav>
			
			</header>
    	)
    }
}
Body.defaultProps = {  
    firstNameProp: "Hello",  
    lastnameProp: "World"  
} 
export default Body
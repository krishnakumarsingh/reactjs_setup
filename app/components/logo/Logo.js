import React from "react";

const styleT = {"color":"#006"};

const stylehink = {"color":"#F30"};

class Logo extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <a className="navbar-brand" href="#">
            	<h3 className="text-muted d-none"><span style={styleT}>T</span><span style={stylehink}>hink<em>M</em>obi</span></h3>
            </a>
        )
    }
}

export default Logo

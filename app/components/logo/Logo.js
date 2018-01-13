import React from "react";

const styleT = {"color":"#006"};

const stylehink = {"color":"#F30"};

class Logo extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <h3 className="text-muted"><span style={styleT}>T</span><span style={stylehink}>hink<em>M</em>obi</span></h3>
        )
    }
}

export default Logo
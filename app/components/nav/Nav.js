import React from "react";

class Nav extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
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
        )
    }
}
export default Nav
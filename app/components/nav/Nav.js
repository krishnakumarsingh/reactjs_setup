import React from "react";

import Logo from '../logo';

class Nav extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            /*<nav className="navbar navbar-expand-md navbar-light bg-light rounded mb-3">
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
            </nav>*/
            <div>
              <nav className="float-right navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse light-header top-notifications">
                <div className="container">
                  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            <span className="glyphicon glyphicon-bell"></span>
                            Notifications 
                            <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            <span className="glyphicon glyphicon-bell"></span>
                            Login 
                            <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            <span className="glyphicon glyphicon-bell"></span>
                            Signup 
                            <span className="sr-only">(current)</span>
                          </a>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </nav>
              <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse light-header main-menu">
                <div className="container">
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  
                  <Logo  />

                  <div className="collapse navbar-collapse d-inline-block" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto float-right">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
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
                </div>
              </nav>
            </div>
        )
    }
}
export default Nav
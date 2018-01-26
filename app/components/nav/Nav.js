import React from "react";
import Logo from '../logo';
import Root from '../root';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Nav extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
          <header className="masthead">
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
                <Root />
              </div>
            </nav>
          </header>
        )
    }
}

export default Nav
import React from "react";

const cardStyle = {"width": "100%"};
const delay600 = {"animationDelay": "600ms"};
const delay1200 = {"animationDelay": "1200ms"};
const delay1800 = {"animationDelay": "1800ms"};
const font28 = {"fontSize": "18px"};
const font14 = {"fontSize": "14px"};
const img = require('../../images/1.jpg');
class Main extends React.Component{

    constructor(props) {
        super(props);
    }

	render(){return(
    		<main role="main" className="col">
          <div id="demo" className="carousel slide row" data-ride="carousel">

            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require('../../images/banner-1.jpg')} alt="Los Angeles" width="100%" />
              </div>
              <div className="carousel-item">
                <img src={require('../../images/banner-2.jpg')} alt="Chicago" width="100%" />
              </div>
              <div className="carousel-item">
                <img src={require('../../images/banner-3.jpg')} alt="New York" width="100%" />
              </div>
            </div>
            
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
          <div className="arrow-items">
            <div className="row wpb_row row-fluid medical-schedules column-gap-1">
              <div className="porto-wrap-container container">
                  <div className="row">
                      <div className="box-one background-color-primary column_container col-sm-12 col-md-3 appear-animation fadeInLeft appear-animation-visible" data-appear-animation="fadeInLeft">
                          <div className="wpb_wrapper column-inner">
                              <div className="porto-feature-box wpb_content_element p-3 m-b-none">
                                  <div className="feature-box feature-box-style-2">
                                      <div className="feature-box-icon">
                                          <i className="icon-image" style={font14}>
                                              <img alt="" src="//www.newsmartwave.net/wordpress/porto/medical/wp-content/uploads/sites/67/2016/09/medical-icon-heart.png" />
                                          </i>
                                      </div>
                                      <div className="feature-box-info">
                                          <h4 className="custom_heading m-n font-weight-normal align-left">Medical Treatment</h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box-two background-color-tertiary column_container col-sm-12 col-md-3 appear-animation fadeInLeft appear-animation-visible" data-appear-animation="fadeInLeft" data-appear-animation-delay="600" style={delay600}>
                          <div className="wpb_wrapper column-inner">
                              <div className="wpb_text_column wpb_content_element p-4 m-2 m-b-none">
                                  <div className="wpb_wrapper">
                                      <h5 className="m-n text-uppercase">
                                          <a title="" href="http://www.newsmartwave.net/wordpress/porto/medical/doctors/">Doctors Timetable
                                              <i className="Simple-Line-Icons-arrow-right-circle"></i>
                                          </a>
                                      </h5>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box-three background-color-primary column_container col-sm-12 col-md-3 appear-animation fadeInLeft appear-animation-visible" data-appear-animation="fadeInLeft" data-appear-animation-delay="1200" style={delay1200}>
                          <div className="wpb_wrapper column-inner">
                              <div className="wpb_raw_code wpb_content_element wpb_raw_html p-4 m-2 m-b-none">
                                  <div className="wpb_wrapper">
                                      <div className="expanded-info background-color-primary d-none">
                                          <div className="info custom-info">
                                              <span>Mon-Fri</span>
                                              <span>8:30 am to 5:00 pm</span>
                                          </div>
                                          <div className="info custom-info">
                                              <span>Saturday</span>
                                              <span>9:30 am to 1:00 pm</span>
                                          </div>
                                          <div className="info custom-info">Name
                                              <span>Sunday</span>
                                              <span>Closed</span>
                                          </div>
                                      </div>
                                      <h5 className="m-n text-uppercase">
                                          Opening Hours
                                          <i className="Simple-Line-Icons-arrow-right-circle"></i>
                                      </h5>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="box-four background-color-secondary column_container col-sm-12 col-md-3 appear-animation fadeInLeft appear-animation-visible" data-appear-animation="fadeInLeft" data-appear-animation-delay="1800" style={delay1800}>
                          <div className="wpb_wrapper column-inner">
                              <div className="porto-feature-box wpb_content_element  m-b-none">
                                  <div className="feature-box feature-box-style-2">
                                      <div className="feature-box-icon">
                                          <i className="Simple-Line-Icons-call-out" style={font28}></i>
                                      </div>
                                      <div className="feature-box-info">
                                          <div className="wpb_text_column wpb_content_element ">
                                              <div className="wpb_wrapper">
                                                  <p>
                                                      <label className="font-weight-light">Emergency case</label>
                                                      <strong className="font-weight-normal">(800)123-4567</strong>
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
          <div className="container">
            <div className="jumbotron">
              <h1>Book lab test online.</h1>
              <p className="lead">Most simple way to book your labrotory test and get online report on your mobile or desktop.</p>
              <p>
                <a className="btn btn-success" href="booking_choice.html" role="button">Book Now</a>
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="card-container">
                  <div className="card">
                    <div className="side">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="side back">Jimmy Eat World</div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card-container">
                  <div className="card" style={cardStyle}>
                    
                    <div className="card-block">
                      <div className="side">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <div className="side back">Jimmy Eat World</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card" style={cardStyle}>
                  
                  <div className="card-block">
                    <div className="side">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="side back">Jimmy Eat World</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
        </main>

    	)
    }
}
Main.defaultProps = {  
    firstNameProp: "Hello",  
    lastnameProp: "World"  
} 
export default Main

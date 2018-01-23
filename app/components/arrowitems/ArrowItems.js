import React from "react";
import FontAwesome from "react-fontawesome";

const style = {"color":"red","cursor": "pointer"}
const delay600 = {"animationDelay": "600ms"};
const delay1200 = {"animationDelay": "1200ms"};
const delay1800 = {"animationDelay": "1800ms"};
const font28 = {"fontSize": "18px"};
const font14 = {"fontSize": "14px"};

class ArrowItems extends React.Component{

	constructor(props) {
    	super(props);
 	}

	render(){
    	return(
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
														<label className="font-weight-light">
															<FontAwesome className='super-crazy-colors' name='rocket' style={{ textShadow: 'rgba(146, 133, 133, 0.84) 0px 2px 0px' }} />
															&nbsp; Emergency case
														</label>
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
			
    	)
    }
}
export default ArrowItems
import React from "react";
import Carousel from "../Carousel";
import ArrowItems from "../ArrowItems";
import Cards from "../Cards";

const img = require('../../images/1.jpg');
class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          profile_detail: [],
        }
    }
    componentDidMount(){
      fetch('http://thinkwide.in/thinkmobi_api/index.php/thinkmobi/api/profile_list')
        .then(results => {
          return results.json();
        }).then(data => {

          
          let optName = data.map((prof) => {
            return (<div>{prof.profile_detail.test_id}</div>)
          });
          const localData = [{
            "profile_detail":{
              "test_id":"269",
              "test_name":"ADVANCED HEALTH CHECK UP",
              "test_charge":"2500",
              "test_reportingtime":"1",
              "report_method":"",
              "test_extra":""
            },
            "test_list":[
              {
                "test_id":"102",
                "test_name":"USG OF WHOLE ABDOMEN",
                "test_charge":"800",
                "test_reportingtime":"1",
                "report_method":"",
                "test_extra":"",
                "dept_name":"RADIOLOGY",
                "category_name":"USG"
              },{
                "test_id":"246",
                "test_name":"ECG.",
                "test_charge":"100",
                "test_reportingtime":"1",
                "report_method":"",
                "test_extra":"",
                "dept_name":"CARDIOLOGY",
                "category_name":"ECG"
              }
            ]
            },{
              "profile_detail":{
                "test_id":"2690",
                "test_name":"ADVANCED HEALTH CHECK UP0",
                "test_charge":"2500",
                "test_reportingtime":"1",
                "report_method":"",
                "test_extra":""
              },
              "test_list":[
                {
                  "test_id":"102",
                  "test_name":"USG OF WHOLE ABDOMEN",
                  "test_charge":"800",
                  "test_reportingtime":"1",
                  "report_method":"",
                  "test_extra":"",
                  "dept_name":"RADIOLOGY",
                  "category_name":"USG"
                },{
                  "test_id":"246",
                  "test_name":"ECG.",
                  "test_charge":"100",
                  "test_reportingtime":"1",
                  "report_method":"",
                  "test_extra":"",
                  "dept_name":"CARDIOLOGY",
                  "category_name":"ECG"
                }
              ]
            },{
              "profile_detail":{
                "test_id":"2691",
                "test_name":"ADVANCED HEALTH CHECK UP1",
                "test_charge":"2500",
                "test_reportingtime":"1",
                "report_method":"",
                "test_extra":""
              },
              "test_list":[
                {
                  "test_id":"102",
                  "test_name":"USG OF WHOLE ABDOMEN",
                  "test_charge":"800",
                  "test_reportingtime":"1",
                  "report_method":"",
                  "test_extra":"",
                  "dept_name":"RADIOLOGY",
                  "category_name":"USG"
                },{
                  "test_id":"246",
                  "test_name":"ECG.",
                  "test_charge":"100",
                  "test_reportingtime":"1",
                  "report_method":"",
                  "test_extra":"",
                  "dept_name":"CARDIOLOGY",
                  "category_name":"ECG"
                }
              ]
            },{
            "profile_detail":{
              "test_id":"2692",
              "test_name":"ADVANCED HEALTH CHECK UP2",
              "test_charge":"2500",
              "test_reportingtime":"1",
              "report_method":"",
              "test_extra":""
            },
            "test_list":[
              {
                "test_id":"102",
                "test_name":"USG OF WHOLE ABDOMEN",
                "test_charge":"800",
                "test_reportingtime":"1",
                "report_method":"",
                "test_extra":"",
                "dept_name":"RADIOLOGY",
                "category_name":"USG"
              },{
                "test_id":"246",
                "test_name":"ECG.",
                "test_charge":"100",
                "test_reportingtime":"1",
                "report_method":"",
                "test_extra":"",
                "dept_name":"CARDIOLOGY",
                "category_name":"ECG"
              }
            ]
          }];
          let profileDetails = data.map((prof) => {
            return (
              <div className="col-4" key={prof.profile_detail.test_id}>
                <div key={prof.profile_detail.test_id}>
                  <Cards 
                    profileDetail={prof}
                    testList={prof} />
                </div>
              </div>
            )
          })
          this.setState({profile_detail: profileDetails});
        })
    }
    
	render(){
    return(
  		<main role="main" className="col main">
        <Carousel />
        <ArrowItems />
        <div className="container">
          <div className="jumbotron">
            <h1>Book lab test online.</h1>
            <p className="lead">Most simple way to book your labrotory test and get online report on your mobile or desktop.</p>
            <p>
              <a className="btn btn-success" href="booking_choice.html" role="button">Book Now</a>
            </p>
          </div>
          <div className="row">
            {this.state.profile_detail}
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

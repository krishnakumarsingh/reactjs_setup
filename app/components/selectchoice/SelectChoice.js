import React from "react";
import Cards from "../Cards";
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class SelectChoice extends React.Component{

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
                  name={prof.profile_detail.test_name} 
                  newPrice={prof.profile_detail.test_charge}
                  testList={prof} />
              </div>
            </div>
          )
        })
        this.setState({profile_detail: profileDetails});
      })
  }
	render(){
    const options = [
      'John',
      'Miles',
      'Charles',
      'Herbie',
    ];
    	return(
    		<main role="main" className="col main">
		        <div className="container">
		          <div className="jumbotron mb-0">
		            <h1>Select your choice.</h1>
		            <p className="lead">Most simple way to book your labrotory test and get online report using your mobile or desktop.</p>
		          </div>
              <Typeahead
                onChange={(selected) => {
                  console.log(selected);
                }}
                options={options}
                className="mb-4"
              />
		          <div className="row">
			        {this.state.profile_detail}
    	          </div>
		        </div>
		        <br/>
		    </main>
    	)
    }
}

export default SelectChoice

import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Cards extends React.Component{

	constructor(props) {
    	super(props);
      this.state = {
        testList: this.props.testList.test_list,
        profileDetail: this.props.profileDetail.profile_detail,
      }
 	}
  componentDidMount() {
    const cardText = ReactDOM.findDOMNode(this.refs.cardText);
    const showMore = ReactDOM.findDOMNode(this.refs.showMore);
    if(cardText.clientHeight > 60) {
      cardText.className += " max-ht-50";
      showMore.className += " show";
    }

  }
  render(){
    const listItems = this.state.testList.map((testList, id) =>
      <span key={id} >{testList.test_name+", "}</span>
    );
    return(
      <div className="card tm-card">
        <img className="card-img-top" src={require('../../images/banner-1.jpg')} width="100%" height="200" alt="Card image cap" />
        <div className="card-block pb-5">
          <h4 className="card-title">{this.state.profileDetail.test_name ? this.state.profileDetail.test_name : "Card title"}</h4>
          <p ref="cardText" className="text-ht-checker card-text wordWrap overFlowHide mb-0 min-ht-50">
            {listItems.length ? listItems : "No Data"}
          </p>
          <button ref="showMore" className="btn-success view-more border-0"  data-toggle="modal" data-target="#myModal">Show More</button>
          <div className="modal fade" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{this.state.profileDetail.test_name ? this.state.profileDetail.test_name : "Card title"}</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  {listItems.length ? listItems : "No Data"}
                </div>
              </div>
            </div>
          </div>
          <Link className="nav-link btn btn-success" to="/SelectChoice">
            <del className="oldPrice">
              {((parseInt(this.state.profileDetail.test_charge)/100)*15) + parseInt(this.state.profileDetail.test_charge)}/-
            </del>
            &nbsp; Now &nbsp; 
            <span className="newPrice">
              {this.state.profileDetail.test_charge}/- &nbsp;
            </span>Book
          </Link>
        </div>
      </div>
  	)
  }
}

export default Cards

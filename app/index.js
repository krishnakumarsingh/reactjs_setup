import React from 'react'
import ReactDOM from 'react-dom'
import Body from './components/body'

import './css/bootstrap.min.css';
import './css/justified-nav.css';

const appName = "ThinkMobi";
const navLi = ["Home", "Pricing", "Preventive Health Package", "Login", "About ThinkMobi"]

ReactDOM.render(
    <Body appName={appName} navLi={navLi} />, 
	document.getElementById('app')
)

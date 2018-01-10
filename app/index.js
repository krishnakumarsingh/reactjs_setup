import React from 'react'
import ReactDOM from 'react-dom'
import Body from './components/body'

import './css/bootstrap.min.css';
import './css/justified-nav.css';

const appName = "ThinkMobi"

ReactDOM.render(
    <Body appName={appName} />, 
	document.getElementById('app')
)

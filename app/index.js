import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/Todos'

const appName = "Todo List"

ReactDOM.render(
    <Todos appName={appName} />, 
	document.getElementById('app')
)
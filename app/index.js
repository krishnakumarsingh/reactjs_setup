import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './components/todos'

const appName = "Todo List"

ReactDOM.render(
    <Todos appName={appName} />, 
	document.getElementById('app')
)
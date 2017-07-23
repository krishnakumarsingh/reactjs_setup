import React from "react";


const style = {"color":"red","cursor": "pointer"}

class Todos extends React.Component{

	constructor(props) {
    	super(props);
	    this.state = {
	      todos: "State Hello",
	    };
	    this.createTodo = this.createTodo.bind(this)
 	}

 	createTodo(e) {
 		this.setState({
	    	todos: "Fn Hello.."
	    });
 	}

	render(){
		const { todos } = this.state;
    	return(
    		<div>
    			<h1 className={"name"}>Click on app name <span onClick={this.createTodo} style={style}>{this.props.appName}, </span>{this.props.firstNameProp + this.props.lastnameProp}</h1>
    			<ol>
    				<li>
    					<h2>By Default Props</h2>
    					<ul>
    						<li>{this.props.firstNameProp}</li>
    						<li>{this.props.lastnameProp}</li>
    					</ul>
    				</li>

    				<li>
    					<h2>By State and change after click on app name it update</h2>
    					<ul>
    						<li>{todos}</li>
    					</ul>
    				</li>
    			</ol>
    		</div>
    	)
    }
}
Todos.defaultProps = {  
    firstNameProp: "Hello",  
    lastnameProp: "World"  
} 
export default Todos
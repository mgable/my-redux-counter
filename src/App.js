import React, { Component } from 'react';
import VisibleTodoList from './containers/VisibleTodoList.js';

class App extends Component {
	render(){
		return (
			<div>
				<VisibleTodoList></VisibleTodoList>
			</div>
		)
	}
}

export default App
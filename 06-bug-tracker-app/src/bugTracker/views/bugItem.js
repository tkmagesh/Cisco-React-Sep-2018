import React, { Component } from 'react';

class BugItem extends Component{
	render(){
		let { bug, toggle } = this.props,
			bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span className={bugStyle} onClick={evt => toggle(bug)}>
					{bug.name}
				</span>
				<div className="datetime">{bug.createdAt.toString()}</div>
			</li>
		)
	}
}
export default BugItem;
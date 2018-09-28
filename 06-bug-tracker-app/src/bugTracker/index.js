import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugStats from './views/bugStats';
import BugList from './views/bugList';
import * as bugActionCreators  from './actions';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, toggle, removeClosed, addNew } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList bugs={bugs} toggle={toggle} removeClosed={removeClosed}/>
			</div>
		)
	}
}

function mapStateToBugTrackerProps(storeState){
	let bugsValue = storeState.bugsData;
	return { bugs : bugsValue };
}

function mapDispatchToBugTrackerProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

export default connect(mapStateToBugTrackerProps, mapDispatchToBugTrackerProps)(BugTracker);

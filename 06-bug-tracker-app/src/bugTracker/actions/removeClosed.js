import bugApi from '../services/bugApi';

export function removeClosed(){
	return function(dispatch, getState){
		let closedBugs = getState().bugsData.filter(bug => bug.isClosed);
		closedBugs
			.forEach(closedBug => {
				bugApi
					.remove(closedBug)
					.then(_ => {
						let removeAction = { type : 'REMOVE' , payload : closedBug };
						dispatch(removeAction);				
					});
			});
		
	}
}
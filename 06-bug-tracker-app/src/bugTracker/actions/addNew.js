import bugApi from '../services/bugApi';

export function addNew(newBugName){
	return function(dispatch){
		let newBugData = {
			id : 0,
			name : newBugName,
			isClosed: false,
			createdAt : new Date()
		};
		bugApi
			.save(newBugData)
			.then(newBug => {
				let addNewAction = { type : 'ADD_NEW', payload : newBug };
				dispatch(addNewAction);
			});
	}
}
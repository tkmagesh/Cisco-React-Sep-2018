export function addNew(newBugName){
	let newBug = {
		name : newBugName,
		isClosed: false,
		createdAt : new Date()
	};
	let addNewAction = { type : 'ADD_NEW', payload : newBug };
	return addNewAction;
}
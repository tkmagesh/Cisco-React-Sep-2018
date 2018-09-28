function spinnerReducer(currentState = 0, action){
	if (action.type === 'INCREMENT') return currentState + 1;
	if (action.type === 'DECREMENT') return currentState - 1;
	return currentState;
}
export default spinnerReducer;
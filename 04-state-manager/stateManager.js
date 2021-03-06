var SM = (function(){	
	var _currentState = undefined,
		_listeners = [],
		_reducer = null,
		_init_action = '@@INIt_ACTION';

	function subscribe(listenerFn){
		_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function getState(){
		return _currentState;
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		return {subscribe, getState, dispatch };
	}

	function bindActionCreators(actionCreators, dispatch){
		var result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(this, arguments);
				dispatch(action);
			}
		}
		return result;
	}

	return { createStore, bindActionCreators };
})();
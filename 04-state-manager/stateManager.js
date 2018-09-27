var SM = (function(){	
	var _currentState = undefined,
		_listeners = [],
		_reducer = null;

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
		return {subscribe, getState, dispatch };
	}

	return { createStore };
})();
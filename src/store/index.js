import {legacy_createStore as createStore} from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
	if (action.type === 'increment') {
		return {
			countr: state.counter + 1,
		};
	} else if (action.type === 'decrement') {
		return {
			countr: state.counter - 1,
		};
	}
};

const store = createStore(counterReducer);

export default store;

import {legacy_createStore as createStore} from 'redux';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREASE = 'INCREASE';
export const TOGGLE = 'TOGGLE';

const initilaState = {counter: 0, showCounter: true};
const counterReducer = (state = initilaState, action) => {
	if (action.type === 'INCREMENT') {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		};
	} else if (action.type === 'DECREMENT') {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	} else if (action.type === 'INCREASE') {
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		};
	} else if (action.type === 'TOGGLE') {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;

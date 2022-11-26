import {useDispatch, useSelector} from 'react-redux';
import classes from './Counter.module.css';
import {INCREMENT, TOGGLE, DECREMENT, INCREASE} from '../store';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);
	const toggleCounterHandler = () => {
		dispatch({type: TOGGLE});
	};

	const incrementHandler = () => {
		dispatch({type: INCREMENT});
	};

	const increaseHandler = () => {
		dispatch({type: INCREASE, amount: 5});
	};

	const decrementHandler = () => {
		dispatch({type: DECREMENT});
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};
export default Counter;

// class Counter extends Component {
// 	incrementHandler() {
// 		this.props.increment();
// 	}

// 	decrementHandler() {
// 		this.props.decrement();
// 	}

// 	counter = 0;

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incrementHandler}>Increment</button>
// 					<button onClick={this.decrementHandler}>Decrement</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: () => dispatch({type: 'increment'}),
// 		decrement: () => dispatch({type: 'increment'}),
// 	};
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

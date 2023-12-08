import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../Store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // console.log('show:', show);
  // console.log('counter', counter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHnadler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementby5Handler = () => {
    dispatch(counterActions.incrementby5());
  };
  const decrementby5Handler = () => {
    dispatch(counterActions.decrementby5());
  };

  const incrementby2Handler = () => {
    dispatch(counterActions.increase(2)); // {type: SOME_UNIQUE_IDENTIFIER , payload:2}
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementby2Handler}>Increment by 2</button>
        <button onClick={decrementHnadler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementby5Handler}>Increment by 5</button>
        <button onClick={decrementby5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

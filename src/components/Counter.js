import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHnadler = () => {
    dispatch({ type: "decrement" });
  };

  const incrementby5Handler = () => {
    dispatch({ type: "incrementby5" });
  };
  const decrementby5Handler = () => {
    dispatch({ type: "decrementby5" });
  };

  const incrementby2Handler=()=>{
    dispatch({type:'increase' , value:2})
  }
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
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

import { useDispatch, useSelector } from "react-redux";
import "./Counter.scss";
import { countSelect, decrement, increment, reset } from "./CounterSlice";

const Counter = () => {
  const { count } = useSelector(countSelect);
  const dispatch = useDispatch();

  return (
    <>
      <div className="counter_area">
        <div className="counter">
          <div className="title">
            <h3>Counter aplication with redux-toolkit</h3>
          </div>
          <hr />
          <h1>{count}</h1>
          <hr />
          <div className="btn_area">
            <button onClick={() => dispatch(decrement())}>--</button> &nbsp;
            <button onClick={() => dispatch(increment())}>++</button> &nbsp;
            <button onClick={() => dispatch(reset())}>reset</button> &nbsp;
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;

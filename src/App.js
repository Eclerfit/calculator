import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.bill);
  const nextCount = useSelector((state) => state.nextState);

  const plusFunction = () => {
    dispatch({ type: "PLUS_NUMBER", payload: count + nextCount });
    console.log(count, nextCount);
  };
  const minusFunction = () => {
    dispatch({ type: "MINUS_NUMBER", payload: count - nextCount });
  };
  const multiplyFunction = () => {
    dispatch({ type: "MULTIPLY_NUMBER", payload: count * nextCount });
  };
  const divideFunction = () => {
    dispatch({ type: "DIVIDE_NUMBER", payload: count / nextCount });
  };
  const numberFunction = (props) => {
    dispatch({ type: "SET_NUMBER", payload: props });
  };

  const resultFunction = () => {
    return count;
  };

  const resetFunction = () => {
    dispatch({ type: "RESET_NUMBER", payload: 0 });
  };

  return (
    <div className="App">
      <div className="title">Calculator</div>
      <div className="calculator">
        <div className="field">{count}</div>
        <div className="numbers">
          <button onClick={() => numberFunction(7)}>7</button>
          <button onClick={() => numberFunction(8)}>8</button>
          <button onClick={() => numberFunction(9)}>9</button>
          <button onClick={() => divideFunction()}>÷</button>
          <button onClick={() => numberFunction(4)}>4</button>
          <button onClick={() => numberFunction(5)}>5</button>
          <button onClick={() => numberFunction(6)}>6</button>
          <button onClick={() => multiplyFunction()}>×</button>
          <button onClick={() => numberFunction(1)}>1</button>
          <button onClick={() => numberFunction(2)}>2</button>
          <button onClick={() => numberFunction(3)}>3</button>
          <button onClick={() => minusFunction()}>-</button>
          <button onClick={() => numberFunction(0)}>0</button>
          <button onClick={() => resetFunction()}>AC</button>
          <button onClick={() => resultFunction()}>=</button>
          <button onClick={() => plusFunction()}>+</button>
        </div>
      </div>
    </div>
  );
}

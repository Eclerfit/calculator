import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";

const initState = {
  nextState: 0,
  bill: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "PLUS_NUMBER":
      return { ...state, bill: action.payload };

    case "MINUS_NUMBER":
      return { ...state, bill: action.payload };

    case "MULTIPLY_NUMBER":
      return { ...state, bill: action.payload };

    case "DIVIDE_NUMBER":
      return { ...state, bill: action.payload };

    case "SET_NUMBER":
      return { ...state, bill: state.bill, nextState: action.payload };

    case "RESET_NUMBER":
      return { ...state, bill: action.payload };

    case "RESULT_NUMBER":
      return { ...state, bill: action.payload };

    default:
      return initState;
  }
};

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

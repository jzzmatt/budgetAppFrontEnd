import ReactDOM from "react-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
// import "./styles/main.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

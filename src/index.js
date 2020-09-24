import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import "./styles/main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Home />;
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import AboutUs from "./components/aboutUs";
import Home from "./components/home";
import ProjectsInternships from "./components/projects_internships";
import "./styles/main.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Home />
        <AboutUs />
        <ProjectsInternships />
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

import React from "react";
import Counts from "./counts";
import "../styles/home.css";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="home">
          <div className="home-landing">
            <h1>Center for Artificial Intelligence Research & Education</h1>
            <img src="/images/caire-landing.png" alt="ai-workspace" />
          </div>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <Counts />
        </div>

        {/* prettier-ignore */}
        <svg className="edge" width="auto" height="auto" viewBox="0 0 1280 107" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H1280V106.5L0 0Z" fill="#0145FF"/>
      </svg>
        {/* home edge */}
      </>
    );
  }
}

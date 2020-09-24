import React from "react";
import { ReactComponent as InternshipLogo } from "../icons/internship.svg";
import { ReactComponent as ProjectsLogo } from "../icons/projects.svg";
import "../styles/projects_internships.css";

export default class ProjectsInternships extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="pi-container">
        <h2>PROJECTS & INTERNSHIPS</h2>
        <div className="count-container">
          <InternshipLogo />
          <div className="count-info">
            <h3>22</h3>
            <p>Internships</p>
          </div>
        </div>
        <ul>
          <li key="1">
            20 students selected for internship at Excelsoft Technologies Pvt.
            Ltd.
          </li>
          <li key="2">10 students selected for internship at Entelika.</li>
        </ul>
        <div className="count-container">
          <ProjectsLogo />
          <div className="count-info">
            <h3>12</h3>
            <p>Projects</p>
          </div>
        </div>
        <ul>
          <li key="1">12 students selected for internship at CII.</li>
          <li key="2">5 students selected for internship at Entelika.</li>
        </ul>
      </div>
    );
  }
}

import React from "react";
import "../styles/counts.css";
import { ReactComponent as InternshipLogo } from "../icons/internship.svg";
import { ReactComponent as ProjectsLogo } from "../icons/projects.svg";
import { ReactComponent as PatentLogo } from "../icons/patent.svg";
import { ReactComponent as SymposiumLogo } from "../icons/symposium.svg";
import { ReactComponent as TalksLogo } from "../icons/tech-talks.svg";
import { ReactComponent as TrainingLogo } from "../icons/training-programs.svg";

export default class Counts extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="counts">
        <div className="count-container">
          <InternshipLogo />
          <div className="count-info">
            <h3>22</h3>
            <p>Internships</p>
          </div>
        </div>

        <div className="count-container">
          <ProjectsLogo />
          <div className="count-info">
            <h3>12</h3>
            <p>Projects</p>
          </div>
        </div>
        <div className="count-container">
          <PatentLogo />
          <div className="count-info">
            <h3>3</h3>
            <p>Patents</p>
          </div>
        </div>
        <div className="count-container">
          <SymposiumLogo />
          <div className="count-info">
            <h3>3</h3>
            <p>Symposiums</p>
          </div>
        </div>
        <div className="count-container">
          <TalksLogo />
          <div className="count-info">
            <h3>3</h3>
            <p>Tech Talks</p>
          </div>
        </div>
        <div className="count-container">
          <TrainingLogo />
          <div className="count-info">
            <h3>4</h3>
            <p>Training Programs</p>
          </div>
        </div>
      </div>
    );
  }
}

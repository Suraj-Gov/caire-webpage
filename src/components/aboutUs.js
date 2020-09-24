import React from "react";
import Person from "./person";
import "../styles/aboutUs.css";

export default class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="about-container">
        <div className="about">
          <h2>ABOUT US</h2>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <h3>OUR OBJECTIVES</h3>
          <ul>
            <li key="1">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.
            </li>
            <li key="2">
              Bring to the table win-win survival strategies to ensure proactive
              domination.
            </li>
            <li key="3">
              Override the digital divide with additional clickthroughs from
              DevOps.
            </li>
          </ul>
          <h3>THE CAIRE TEAM</h3>
          <div className="team">
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
          </div>
          <h3>OUR PARTNERS AND ADVISORS</h3>

          <div className="partners">
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
            <Person
              personName="Alice"
              personDesignation="Chair"
              personDetails="Idk, just fill some stuff here about the person"
              personImg="/images/personImgs/alice.jpg"
            />
          </div>
        </div>
        {/* prettier-ignore */}
        <svg viewBox="0 0 1281 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1281V139L0 0Z" fill="#14399E"/>
        </svg>
      </div>
    );
  }
}

import React from "react";

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: this.props.personName,
      personDesignation: this.props.personDesignation,
      personDetails: this.props.personDetails,
      personImg: this.props.personImg,
    };
  }

  render() {
    return (
      <div className="person">
        <img src={this.state.personImg} alt={`${this.state.personName}`} />
        <div className="details">
          <p className="name">{this.state.personName}</p>
          <p className="designation">{this.state.personDesignation}</p>
          <p className="details">{this.state.personDetails}</p>
        </div>
      </div>
    );
  }
}

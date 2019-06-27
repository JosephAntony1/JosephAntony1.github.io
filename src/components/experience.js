import React from "react";
import "./resume.css";
class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  bullets() {
    let text = [];
    console.log(this.props.info);
    for (let bullet in this.props.info) {
      text.push(<li>{this.props.info[bullet]}</li>);
    }
    return text;
  }

  render() {
    return (
      <div className="experience">
      <span>
        <div className="resumeTitle">
          <h2>{this.props.title}</h2>
          <h5 className="company">{this.props.company}</h5>
        </div>
        <div className="work">{this.bullets()}</div>
        </span>
      </div>
    );
  }
}

export default Experience;

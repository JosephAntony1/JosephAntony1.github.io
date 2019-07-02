import React from "react";
import "./resume.css";
import "../App.css";
class Experience extends React.Component {
  bullets() {
    let text = [];
    for (let bullet in this.props.info) {
      text.push(<li style={{marginBlockStart:" 0.83em"}} key={bullet}>{this.props.info[bullet]}</li>);
    }
    return text;
  }

  render() {
    return (
      <div className="experience  main-color">
        <span>
          <div className="jobTitle">
            <h2>{this.props.title}</h2>
            <span>
              <h5 className="company">{this.props.company} </h5>
              <h6 className="date">
                <i>{this.props.date}</i>
              </h6>
            </span>
          </div>
          <div className="work">{this.bullets()}</div>
        </span>
      </div>
    );
  }
}

export default Experience;

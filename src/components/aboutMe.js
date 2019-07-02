import React from "react";
import "../App.css";
import Type from "./type.js";
class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this._ismounted = false;
  }

  componentDidMount() {
    this._ismounted = true;
  }

  render() {
    return (
      <div
        style={{
          fontSize: "9vh",
          fontWeight: "lighter",
          height: "80vh"
        }}
      >
        <div className="center-vert main-color">
          <Type
            strings={[
              "Software Engineer",
              "Web Developer",
              "Machine Learning Enthusiast",
              "Amateur Photographer",
              "Mediocre musician",
              "Dog Lover",
              "Dog Owner",
              "Actually a dog",
              "Just kidding.",
              "Or am I?",
              "I hope you're not still reading this",
              "I put so much more in this site"
            ]}
            loop={true}
            speed={100}
            lifeLike={true}
            breakLines={false}
            waitUntilVisible={true}
            nextStringDelay={3300}
          />
        </div>
      </div>
    );
  }
}
export default AboutMe;

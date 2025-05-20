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
            "Machine Learning Engineer",
            "Build & Release Engineer",
            "Web Developer",
            "Full-Stack Tinkerer",
            "NLP Enthusiast",
            "CI/CD Automator",
            "Docker Evangelist",
            "Data Whisperer",
            "Makerspace Aficionado",
            "ESP32 Wrangler",
            "LED Artist",
            "Dog Lover",
            "Dog Owner",
            "Actually a dog",
            "Just kidding.",
            "Or am I?",
            "You’ve read this far… impressive.",
            "Bitwarden Fan",
            "Chicago CTA Tracker Guy",
            "Pythonic Problem Solver",
            "Please hire me"
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

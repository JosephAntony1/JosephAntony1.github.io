import React from "react";
import "./resume.css";
import Experience from "./experience.js";
import Separator from "./separator.js";
class Resume extends React.Component {
  render() {
    const leidosInfo = [
      "Coded and tested a variety of machine learning algorithms for large scale data clarification",
      "Utilized Python’s Flask to make a web UI and Whoosh Alchemy to manage a PostgreSQL database to handle large streams of continually flowing data.",
      "Using AlanNLP trained on the SQUAD dataset to develop a natural language procesing conversational UX for Leidos employees and customers to easily converse with and get their questions answered more easily."
    ];

    const solsticeInfo = [
      "Created a neural network capable of reading the American Sign Language alphabet using cutting edge Single Shot Detection via Tensorflow, working under a Scrum Agile Methodology; project was demoed at Google’s Cloud Next conference",
      "Developed a V0.1 version of a website to host the technology for anyone to interact with it using React.js"
    ];

    const wmucInfo = [
      "Created and maintain an app for listening to the school’s radio station with plans to expand to a database for all local shows",
      "Managed a team of 4 developers using an agile development framework"
    ];

    return (
      <div className="experiences">
        <Separator />

        <Experience
          title="Software Engineer"
          company="Leidos"
          info={leidosInfo}
          date="(June 2017 - Present)"
        />
        <Separator />

        <Experience
          title="Software Engineering Intern"
          company="Solstice Consulting"
          info={solsticeInfo}
          date="(June 2018 - August 2018)"
        />
        <Separator />

        <Experience
          title="Android Developer"
          company="WMUC"
          info={wmucInfo}
          date="(November 2016 – May 2017)"
        />
        <br />
      </div>
    );
  }
}

export default Resume;

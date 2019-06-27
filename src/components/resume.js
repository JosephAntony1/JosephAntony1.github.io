import React from "react";
import "./resume.css";
import Experience from "./experience.js";
class Resume extends React.Component {
  render() {
    const leidosInfo = [
      "Coded and tested a variety of machine learning algorithms for large scale data clarification",
      "Utilized Python’s Flask to make a web UI and Whoosh Alchemy to manage a PostgreSQL database to handle large streams of continually flowing data.",
      "Using AlanNLP trained on the SQUAD dataset to develop a natural language procesing conversational UX for Leidos employees and customers to easily converse with and get their questions answered more easily."
    ];

    return (
      <div className="experiences">
        <Experience title="Software Engineer" company="Leidos" info={leidosInfo}/>
        <Experience
          title="Software Engineering Intern"
          company="Solstice Consulting"
        />
        <Experience title="Android Developer" company="WMUC" />
      </div>
    );
  }
}

export default Resume;

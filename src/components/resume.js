import React from "react";
import "./resume.css";
import Experience from "./experience.js";
import Separator from "./separator.js";

const Resume = () => {
  const xsellInfo = [
    "Developed an AutoML tool to automatically label conversation topics and agent actions, eliminating costly manual annotation.",
    "Led the implementation of a non-LLM-based few-shot active learning algorithm to generate domain-specific datasets for cost-effective LLM fine-tuning.",
    "Standardized client-specific ML models into a unified pipeline, ensuring scalability and consistency across analyses.",
    "Managed MLOps workflows including model deployment and serving, LLM enablement via Amazon Bedrock, Dockerization, CI/CD setup, and production model monitoring.",
    "Implemented a range of classification techniques, from linear regression and HDBSCAN to spaCy transformers and Bedrock LLMs, to analyze and automate insights from text."
  ];

  const alethixInfo = [
    "Built and maintained Java Spring servers orchestrated by Hazelcast distributed services to track, plan, and log large-scale data sources for the U.S. Air Force."
  ];

  const solsticeInfo = [
    "Created a vision-based neural network application, Koko, which was demoed at Google’s Next conference to showcase new edge device architecture.",
    "Developed an interactive website using React.js to host the application."
  ];

  const leidosInfo = [
    "Developed and evaluated machine learning algorithms for large-scale data classification and disambiguation.",
    "Built a web-based UI using Flask and integrated Whoosh Alchemy with PostgreSQL to manage and search high-volume streaming data.",
    "Designed a conversational NLP interface using AllenNLP models trained on the SQuAD dataset to enable real-time Q&A functionality."
  ];

  return (
    <div className="experiences">
      <Separator />

      <Experience
        title="Machine Learning Engineer"
        company="XSELL Technologies LLC"
        info={xsellInfo}
        date="(September 2020 – Present)"
      />
      <Separator />

      <Experience
        title="Software Engineer"
        company="Alethix LLC"
        info={alethixInfo}
        date="(June 2019 – August 2020)"
      />
      <Separator />

      <Experience
        title="Software Engineer Intern"
        company="Solstice Consulting"
        info={solsticeInfo}
        date="(June 2018 – August 2018)"
      />
      <Separator />

      <Experience
        title="Advanced Solutions Software Engineer Intern"
        company="Leidos"
        info={leidosInfo}
        date="(June 2017 – August 2017)"
      />

      <br />
    </div>
  );
};

export default React.memo(Resume);

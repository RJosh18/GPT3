import React from "react";
import "./Feature.css";

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <p className="gpt3__features-container_feature-text">{text}</p>
  </div>
);

export default Feature;

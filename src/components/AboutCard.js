import React from "react";

import "./AboutCard.css";

function AboutCard({ image, text, reversed, fade }) {
  return (
    <div data-aos={fade} className={`container aboutCard ${reversed}`}>
      <p>{text}</p>
      <img className="aboutCard__image" src={image} alt="" />
    </div>
  );
}

export default AboutCard;

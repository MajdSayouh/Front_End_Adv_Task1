import React from "react";
import "./servicesStyle.css";

const ServicesDetails = (props) => {
  const { title, desc, style, image } = props;
  return (
    <div className={style}>
      <div className="sec-text">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="image">
        <img alt="imag1" src={image}></img>
      </div>
    </div>
  );
};

export default ServicesDetails;

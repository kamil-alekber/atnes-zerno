import React from "react";
import "./Showcase.scss";

export default function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase-item showcase-item-one">
        <img src={require("../../assets/images/field.jpg")} alt="" />
      </div>
      <div className="showcase-item showcase-item-two">
        <img src={require("../../assets/images/field.jpg")} alt="" />
        <div className="sub-items">
          <img src={require("../../assets/images/field.jpg")} alt="" />
          <img src={require("../../assets/images/field.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}

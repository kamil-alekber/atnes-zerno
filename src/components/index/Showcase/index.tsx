import React from "react";
import "./Showcase.scss";
import Link from "next/link";

export default function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase-item showcase-item-one">
        <img src={require("../../../assets/images/field.jpg")} alt="" />
        <Link href="/about">
          <a />
        </Link>
      </div>
      <div className="showcase-item showcase-item-two">
        <div className="top-image">
          <img src={require("../../../assets/images/field.jpg")} alt="" />
          <Link href="/">
            <a />
          </Link>
        </div>
        <div className="sub-items">
          <span className="bottom-first-img">
            <img src={require("../../../assets/images/field.jpg")} alt="" />
            <Link href="/contact">
              <a />
            </Link>
          </span>
          <span className="bottom-second-img">
            <img src={require("../../../assets/images/field.jpg")} alt="" />
            <Link href="/order">
              <a />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

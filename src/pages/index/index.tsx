import React from "react";
import Description from "../../components/Description/Description";
import Showcase from "../../components/Showcase/Showcase";

export default function index(props) {
  return (
    <section className="index-section">
      <Showcase />
      <Description />
    </section>
  );
}

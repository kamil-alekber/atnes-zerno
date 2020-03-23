import React from "react";
import Description from "../../components/Description/Description";
import Showcase from "../../components/Showcase/Showcase";

export default function index(props) {
  // const { name: title } = props.app;
  return (
    <section className="top-page-section">
      <Showcase />
      <Description />
    </section>
  );
}

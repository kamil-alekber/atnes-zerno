import React from "react";
import Description from "../../components/Index/Description";
import Showcase from "../../components/Index/Showcase";

export default function index(props) {
  return (
    <section className="index-section">
      <Showcase />
      <Description />
    </section>
  );
}

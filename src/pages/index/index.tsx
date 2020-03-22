import React from "react";
import Description from "../../components/Description/Description";
import { Segment } from "semantic-ui-react";

export default function index(props) {
  // const { name: title } = props.app;
  return (
    <section className="top-page-section">
      <div className="page-title">
        <h1>Добро пожаловать!</h1>
      </div>
      <Description />
    </section>
  );
}

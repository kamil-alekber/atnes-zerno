import React from "react";
import Description from "../../components/Description/Description";
export default function index(props) {
  const { name: title } = props.app;
  return (
    <div>
      {title}
      <Description />
    </div>
  );
}

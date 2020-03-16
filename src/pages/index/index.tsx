import React from "react";

export default function index(props) {
  const { name: title } = props.app;
  return (
    <div>
      {title}
      hello me from the past
    </div>
  );
}

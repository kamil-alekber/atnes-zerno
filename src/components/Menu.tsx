import React from "react";

export default function Menu({ name }: { name: string }) {
  return (
    <ul>
      <li>Index</li>
      <li>About</li>
      <li>Contact us</li>
      <pre>site name is {name}</pre>
    </ul>
  );
}

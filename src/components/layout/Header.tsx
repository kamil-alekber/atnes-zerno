import React from "react";
import "./Header.scss";

interface Props {}

export default function Header({}: Props) {
  return (
    <section id="header-section">
      <h1 className="header-title">ATNES-Zerno</h1>
    </section>
  );
}

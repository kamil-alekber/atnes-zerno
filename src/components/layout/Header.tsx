import React from "react";
import "./Header.scss";
import Menu from "./Menu";

export default function Header() {
  return (
    <React.Fragment>
      <header id="header">
        <div className="header-first-item">Atnes-ZERNO</div>
        <div className="header-second-item">
          <span className="phone-number">+7 707 922 74 64</span>
          <br />
          <small>Ежедневно с 9:00 до 21:00</small>
        </div>
        <div className="header-third-item">Казахстан</div>
        <Menu />
      </header>
    </React.Fragment>
  );
}

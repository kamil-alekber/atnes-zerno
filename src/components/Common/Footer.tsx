import React from "react";
import "./Footer.scss";
import { Divider, Segment } from "semantic-ui-react";

export default function Footer() {
  return (
    <div className="wrapper">
      <hr className="footer-line" />
      <footer id="footer">
        <p>© 2011 — 2020 TOO АТНЕС-ЗЕРНО. Все права защищены</p>
        <div>
          <b> +7 771 081-44-48</b>
          <p>
            Казахстан, 150000, РК, СКО, г.Петропавловск, ул. Жамбыла, дом 174,
            оф. 2
          </p>
        </div>
      </footer>
    </div>
  );
}

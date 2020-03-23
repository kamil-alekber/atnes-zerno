import React from "react";
import { Divider } from "semantic-ui-react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="wrapper">
      <hr className="footer-line" />
      <div className="footer-links">
        <div>
          <h3>Мука</h3>
          <ul>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Super</h3>
          <ul>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Super</h3>
          <ul>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
            <li>
              <a>Lorem ipsum dolor sit amet.</a>
            </li>
          </ul>
        </div>
      </div>
      <Divider />
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

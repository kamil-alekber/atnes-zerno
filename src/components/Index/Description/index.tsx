import React from "react";
import "./Description.scss";
import Link from "next/link";

export default function Description() {
  return (
    <section className="description">
      <h1 className="description-title">Мука — для вас и вашей семьи</h1>

      <article className="description-container">
        <div className="description-container-item">
          <img
            className="article-img"
            src={require("../../../assets/images/work-with-us.jpg")}
            alt=""
          />
          <div className="article-content">
            <h3>Фильтры для воды под мойку</h3>
            <ul>
              <li>Отдельный кран для питьевой воды</li>
              <li>Находится под мойкой</li>
              <li>Несколько степеней очистки воды</li>
            </ul>
            <Link href="/details?dark=true">
              <a>УЗНАЙТЕ БОЛЬШЕ О СОТРУДНИЧЕСТВЕ </a>
            </Link>
          </div>
        </div>
        <div className="description-container-item last-child">
          <img
            className="article-img"
            src={require("../../../assets/images/work-with-us.jpg")}
            alt=""
          />
          <div className="article-content">
            <h3>Фильтры для воды под мойку</h3>
            <ul>
              <li>Отдельный кран для питьевой воды</li>
              <li>Находится под мойкой</li>
              <li>Несколько степеней очистки воды</li>
            </ul>
            <Link href="/details">
              <a>УЗНАЙТЕ БОЛЬШЕ О СОТРУДНИЧЕСТВЕ </a>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

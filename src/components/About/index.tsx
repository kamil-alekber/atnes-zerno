import React from "react";

export default function index() {
  return (
    <section className="about-section">
      <div className="about-top-picture"></div>
      <h1 className="page-title">О компании</h1>
      <p>
        Наши фильтры высоко ценятся покупателями и профессионалами в области
        водоочистки. Продукция соответствует европейским стандартам, имеет
        сертификаты качества LGA и TÜV
      </p>
      <article className="about-article">
        <div className="article-img">
          <img src={require("../../assets/images/main1.jpg")} alt="" />
        </div>
        <div className="article-content">
          <h3>Достижения компании</h3>
          <p>
            Наши фильтры высоко ценятся покупателями и профессионалами в области
            водоочистки. Продукция соответствует европейским стандартам, имеет
            сертификаты качества LGA и TÜV.
          </p>
        </div>
      </article>
      <article className="about-article">
        <div className="article-content">
          <h3>О компании "Аквафор"</h3>
          <p>
            Аквафор основан в 1992 году, чтобы создавать фильтры для воды, и
            вырос в международную компанию с заводами и лабораториями в России,
            Эстонии, Германии, США и других странах.
          </p>
        </div>
        <div className="article-img">
          <img src={require("../../assets/images/main3.jpg")} alt="" />
        </div>
      </article>

      <article className="work-with-us about-article">
        <img src={require("../../assets/images/work-with-us.jpg")} alt="" />
        <div className="article-content">
          <h1> Бизнес с Аквафор</h1>
          <p>
            Аквафор предоставляет партнерам ряд серьезных <br /> преимуществ,
            которые помогают участвовать <br /> в серьезных проектах и занять
            лидирующие позиции <br /> в сегменте.
          </p>
          <a href="">УЗНАЙТЕ БОЛЬШЕ О СОТРУДНИЧЕСТВЕ </a>
        </div>
      </article>

      <article className="about-article">
        <div className="article-img">
          <img src={require("../../assets/images/main2.jpg")} alt="" />
        </div>
        <div className="article-content">
          <h3>Современные технологии</h3>
          <p>
            Задача фильтров для воды – эффективно и необратимо удалять вредные
            примеси. Глубоко очищая воду, фильтр должен удерживать все
            накопленные загрязнители. А материалы, используемые для
            производства, должны быть безопасны для здоровья потребителя
          </p>
        </div>
      </article>
    </section>
  );
}

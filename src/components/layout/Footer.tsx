import React from "react";
import { Card, Divider } from "semantic-ui-react";
import "./Footer.scss";

export default function Footer() {
  const content = [
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%"
    },
    {
      header: "Project Report - May",
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination.",
      meta: "ROI: 34%"
    },
    {
      header: "Project Report - June",
      description:
        "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
      meta: "ROI: 27%"
    }
  ];

  const items = content.map((item, index) => {
    return (
      <Card key={index}>
        <Card.Content>
          <Card.Header>{item.header}</Card.Header>
          <Card.Meta>{item.meta}</Card.Meta>
          <Card.Description>{item.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return (
    <section id="footer-section">
      <Divider />
      <h3 className="footer-title">Полезные ссылки</h3>
      <Card.Group className="footer-content">{items}</Card.Group>
      <Divider />
      <div className="footer-after-link">
        <span> ТОО "Aтнес Зерно" © 2009-2020. Все права защищены</span>
        <span>
          +7 771 081-44-48 <br />
          <small>
            Казахстан, 150000, РК, СКО, г.Петропавловск, ул. Жамбыла, дом 174,
            оф. 27В
          </small>
        </span>
      </div>
    </section>
  );
}

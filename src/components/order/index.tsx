import React from "react";
import { Item } from "semantic-ui-react";
import BuyModal from "../buy";
import "./Order.scss";

const products = [
  {
    title: "Высший сорт",
    price: "100тг",
    description: "Лучшая мука на районе"
  },
  { title: "Первый сорт", price: "200тг", description: "Тоже не плохо" }
];

export default function index({ app }: { app: firebase.app.App }) {
  return (
    <section id="order-section">
      {/* <h1 className="page-title">Список выбранных товаров</h1> */}
      <Item.Group className="order-section-group" divided>
        {products.map((item, index) => {
          return (
            <Item className="order-section-item" key={index}>
              <Item.Image
                size="tiny"
                src={require("../../assets/images/main1.jpg")}
              />

              <Item.Content>
                <Item.Header>{item.title}</Item.Header>
                <Item.Meta>
                  <span className="price">{item.price}</span>
                </Item.Meta>
                <Item.Description>{item.description}</Item.Description>
              </Item.Content>
              {index === 0 && (
                <Item.Extra className="order-section-extra">
                  <BuyModal app={app} triggerModelBtn="Оформить заказ" />
                </Item.Extra>
              )}
            </Item>
          );
        })}
      </Item.Group>
    </section>
  );
}

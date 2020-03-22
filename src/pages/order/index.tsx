import React from "react";
import { Item, Button, Icon } from "semantic-ui-react";
import BuyModal from "../../components/Buy/BuyModal";

export default function index() {
  const products = [
    {
      title: "Высший сорт",
      price: "100тг",
      description: "Лучшая мука на районе"
    },
    { title: "Первый сорт", price: "200тг", description: "Тоже не плохо" }
  ];
  const handleOrderClick = () => {
    console.log("buy");
  };
  return (
    <section className="top-page-section">
      <h1 className="page-title">Ваши заказы</h1>
      <Item.Group divided>
        {products.map((item, index) => {
          return (
            <Item key={index}>
              <Item.Image size="tiny" src="https://picsum.photos/200/300" />

              <Item.Content>
                <Item.Header>{item.title}</Item.Header>
                <Item.Meta>
                  <span className="price">{item.price}</span>
                </Item.Meta>
                <Item.Description>{item.description}</Item.Description>
              </Item.Content>
              {index === 0 && (
                <Item.Extra>
                  <BuyModal triggerModelBtn="Оформить заказ" />
                </Item.Extra>
              )}
            </Item>
          );
        })}
      </Item.Group>
    </section>
  );
}

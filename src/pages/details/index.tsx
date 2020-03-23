import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Grid, Image, Card, Button } from "semantic-ui-react";
import { OrderCountContext } from "../_app";

export default function index() {
  const router = useRouter();
  const { orderCount, setOrderCount } = useContext(OrderCountContext);

  const handleOrderProceed = () => {
    router.push("/order");
  };

  const handleOrderRemove = () => {
    setOrderCount(0);
  };

  return (
    <section className="details-section">
      <h1 className="page-title">{router.query.name}</h1>
      <Grid divided="vertically" padded>
        <Grid.Row columns={2}>
          <Grid.Column width={10}>
            <pre>{JSON.stringify(router.query, null, 2)}</pre>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card>
              <Card.Content>
                {/* <Image
                  floated="right"
                  size="mini"
                  src="https://picsum.photos/200/300"
                /> */}
                <Card.Header>Корзина</Card.Header>
                <Card.Meta>
                  Количество покупок: <strong>{orderCount}</strong>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button onClick={handleOrderProceed} basic color="green">
                    Купить
                  </Button>
                  <Button onClick={handleOrderRemove} basic color="red">
                    Удалить
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  );
}

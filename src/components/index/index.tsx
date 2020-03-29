import { useRouter } from "next/router";
import React from "react";
import { Image, Item, Icon, Grid, Segment } from "semantic-ui-react";
import "./Index.scss";

export default function index() {
  const router = useRouter();
  const { query } = router;

  function handleItemClick(id: string) {
    return () => {
      const q = Object.assign(query, { id });
      router
        .push({ pathname: "/news", query: q })
        .then(() => window.scrollTo(0, 0));
    };
  }

  const info = [
    {
      id: "123",
      img: "https://react.semantic-ui.com/images/wireframe/image.png",
      description:
        " Посевная площадь сельскохозяйственных культур области в текущем году составила 4,2 млн. га, из них зерновые на площади 2,8 млн. га, масличные на площади 1 млн. га, кормовые на 370 тыс. га, картофель на 37,7 тыс. га, овощи на 6,2 тыс. га."
    },
    {
      id: "123",
      img: "https://react.semantic-ui.com/images/wireframe/image.png",
      description:
        " Посевная площадь сельскохозяйственных культур области в текущем году составила 4,2 млн. га, из них зерновые на площади 2,8 млн. га, масличные на площади 1 млн. га, кормовые на 370 тыс. га, картофель на 37,7 тыс. га, овощи на 6,2 тыс. га."
    },
    {
      id: "123",
      img: "https://react.semantic-ui.com/images/wireframe/image.png",
      description:
        " Посевная площадь сельскохозяйственных культур области в текущем году составила 4,2 млн. га, из них зерновые на площади 2,8 млн. га, масличные на площади 1 млн. га, кормовые на 370 тыс. га, картофель на 37,7 тыс. га, овощи на 6,2 тыс. га."
    }
  ];

  const columns = info.map((item, index) => {
    return (
      <Grid.Column key={index}>
        <Segment>
          <Item>
            <Image centered rounded src={item.img} />
            <br />
            <Item.Content>
              <Item.Description>{item.description}</Item.Description>
              <br />
              <Item.Extra as="a" onClick={handleItemClick(item.id)}>
                Подробнее...
                <Icon name="angle right" />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Segment>
      </Grid.Column>
    );
  });

  return (
    <section id="index-section">
      <Grid columns={3} stackable divided>
        <Grid.Row>{columns}</Grid.Row>
      </Grid>
    </section>
  );
}

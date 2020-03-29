import React from "react";
import { Item, Button, Divider, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";

const paragraph =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui provident exercitationem aliquid dolore iure unde! Illo vero, nobis est maxime perferendis error nihil dolores fugit consequuntur fuga odit, nisi quibusdam?";

export default function Catalog() {
  const router = useRouter();
  const { query } = router;

  function handleItemClick(id: string) {
    return () => {
      const q = Object.assign(query, { id });
      router
        .push({ pathname: "/details", query: q })
        .then(() => window.scrollTo(0, 0));
    };
  }

  const items = ["1", "2", "3"].map((item, index) => {
    return (
      <Item key={index}>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content verticalAlign="middle">
          <Item.Header>Content A</Item.Header>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button.Group>
              <Button onClick={handleItemClick(item)}>Подробней</Button>
              <Button.Or text="" />
              <Button color="teal">Добавить в корзину</Button>
            </Button.Group>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  });

  return (
    <section id="catalog-section">
      <Item.Group divided relaxed>
        {items}
      </Item.Group>
    </section>
  );
}

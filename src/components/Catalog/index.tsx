import React from "react";
import { Item, Button, Divider } from "semantic-ui-react";

const paragraph =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui provident exercitationem aliquid dolore iure unde! Illo vero, nobis est maxime perferendis error nihil dolores fugit consequuntur fuga odit, nisi quibusdam?";

export default function Catalog() {
  return (
    <Item.Group relaxed>
      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content verticalAlign="middle">
          <Item.Header>Content A</Item.Header>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button color="teal" floated="right">
              Добавить в корзину
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
      <Divider section />
      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content verticalAlign="middle">
          <Item.Header>Content B</Item.Header>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button color="teal" floated="right">
              Добавить в корзину
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
      <Divider section />
      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content verticalAlign="middle">
          <Item.Header>Content C</Item.Header>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button color="teal" floated="right">
              Добавить в корзину
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

import React from "react";
import "./About.scss";
import { Item } from "semantic-ui-react";

export default function index() {
  return (
    <Item.Group>
      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header as="a">Cute Dog</Item.Header>
          <Item.Description>
            <p>Some description</p>
            <p>
              Many people also have their own barometers for what makes a cute
              dog.
            </p>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header as="a">Cute Dog</Item.Header>
          <Item.Description>some desct</Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image
          size="small"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <Item.Content header="Cute Dog">some descr</Item.Content>
      </Item>
    </Item.Group>
  );
}

import { useRouter } from "next/router";
import React from "react";
import { Image, Item, Icon } from "semantic-ui-react";
import "./Index.scss";

export default function index() {
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
  const items = [1, 1, 1, 1].map((item, index) => {
    return (
      <Item key={index}>
        <Item.Image
          size="tiny"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header>Header</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Item.Description>
          <Item.Extra
            className="index-group-item-extra"
            as="a"
            onClick={handleItemClick("123")}
          >
            Дополнительная информация
            <Icon name="angle right" />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  });
  return (
    <section id="index-section">
      <Item.Group className="index-group-item" divided>
        {items}
      </Item.Group>
    </section>
  );
}

import { useRouter } from "next/router";
import React from "react";
import { Image, Item, Divider } from "semantic-ui-react";

export default function index() {
  const router = useRouter();
  const { query } = router;

  function handleItemClick(id: string) {
    return () => {
      const q = Object.assign(query, { id });
      router.push({ pathname: "/details", query: q });
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
          <Item.Extra as="a" onClick={handleItemClick("123")}>
            Additional Details
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  });
  return (
    <section className="index-section">
      <Item.Group divided>{items}</Item.Group>
    </section>
  );
}

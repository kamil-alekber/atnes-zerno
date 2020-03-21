import React, { useState, useEffect } from "react";
import { Item, Segment, Dimmer, Loader } from "semantic-ui-react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const description = [
  "Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their",
  "tiny stature, and even others for their massive size."
].join(" ");

const link = "https://picsum.photos/200/300";

export default function Description() {
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(link)
      .then((data: { url: string }) => setImages(data.url))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Item.Group>
      <Item>
        {loading ? (
          <Segment size="large">
            <Loader active={loading} />
          </Segment>
        ) : (
          <Item.Image as="img" size="small" src={images} alt="my img" />
        )}
        <Item.Content>
          <Link href={`/details`}>
            <a>Cute Dog</a>
          </Link>
          <Item.Description>
            <p>{description}</p>
            <p>
              Many people also have their own barometers for what makes a cute
              dog.
            </p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

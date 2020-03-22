import fetch from "isomorphic-unfetch";
import React, { useEffect, useState, useContext } from "react";
import { Button, Card, Image, Placeholder } from "semantic-ui-react";
import { useRouter } from "next/router";
import { OrderCountContext } from "../../pages/_app";

const link = "https://picsum.photos/200/300";

const cards = [
  {
    avatar: link,
    date: "Joined in 2013",
    header: "Helen",
    description: "Primary Contact"
  },
  {
    avatar: link,
    date: "Joined in 2013",
    header: "Matthew",
    description: "Primary Contact"
  },
  {
    avatar: link,
    date: "Joined in 2013",
    header: "Molly",
    description: "Primary Contact"
  }
];

export default function Description() {
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { setOrderCount, orderCount } = useContext(OrderCountContext);

  const handleClick = () => {
    const newCount = orderCount + 1;
    setOrderCount(newCount);
    localStorage.setItem("orderCount", newCount + "");
  };

  const handleMoreClick = (header: string) => {
    const url = `/details?name=${header}`;
    router.push(url);
  };

  useEffect(() => {
    fetch(link)
      .then((data: { url: string }) => setImages(data.url))
      .finally(() => {
        setLoading(false);
      });
    return () => {
      setImages("");
    };
  }, [loading]);

  return (
    <React.Fragment>
      <Card.Group doubling itemsPerRow={3} stackable>
        {cards.map(card => (
          <Card key={card.header}>
            {loading ? (
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            ) : (
              <div style={{ width: "calc(50% - 2em)", minHeight: "300px" }}>
                <Image src={card.avatar} />
              </div>
            )}

            <Card.Content>
              {loading ? (
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line length="very short" />
                    <Placeholder.Line length="medium" />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              ) : (
                <React.Fragment>
                  <Card.Header>{card.header}</Card.Header>
                  <Card.Meta>{card.date}</Card.Meta>
                  <Card.Description>{card.description}</Card.Description>
                </React.Fragment>
              )}
            </Card.Content>

            <Card.Content extra>
              <Button onClick={handleClick} disabled={loading} primary>
                Добавить
              </Button>
              <Button onClick={() => handleMoreClick(card.header)}>
                О продукте
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </React.Fragment>
  );
}

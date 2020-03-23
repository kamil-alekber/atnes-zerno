import React from "react";
import { Grid, Image } from "semantic-ui-react";

const link = "https://picsum.photos/200/300";

export default function Showcase() {
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image src={link} />
          <p>Hello world is the best place to find yourself</p>
        </Grid.Column>
        <Grid.Column>
          <Image src={link} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src={link} />
        </Grid.Column>
        <Grid.Column>
          <Image src={link} />
        </Grid.Column>
        <Grid.Column>
          <Image src={link} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Canvas from "./canvas";
import CompList from "./compList";

export const Home = props => (
  <Grid style={{ margin: 0 }} columns={2}>
    <Grid.Column width={13}>
      <Segment style={{ height: "100%", margin: 0, padding: 0 }}>
        <Canvas />
      </Segment>
    </Grid.Column>
    <Grid.Column width={3}>
      <CompList />
    </Grid.Column>
  </Grid>
);
export default Home;

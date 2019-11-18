import React from "react";
import { Grid, Rail, Segment } from "semantic-ui-react";
import Canvas from "./canvas";

export const Home = props => (
  <Grid style={{ height: "100vh", width: "100vw" }} centered columns={2}>
    <Grid.Column stretched width={14}>
      <Segment style={{ height: "100%" }}>
        <Canvas />
      </Segment>
    </Grid.Column>
  </Grid>
);
export default Home;

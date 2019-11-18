import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, Segment } from "semantic-ui-react";

export const CompList = props => {
  const canvas = useSelector(({ canvas }) => canvas);
  return (
    <Fragment>
      <Grid.Row style={{ height: "48vh" }}>
        <Segment
          style={{
            height: "100%",
            width: "100%",
            overflow: "scroll",
            scrollbarWidth: "none"
          }}
        >
          <h2>Components</h2>
          {canvas.map(c => (
            <div key={c.id}>
              {c.x}, {c.y}, Selected: {c.selected ? "true" : "false"}
            </div>
          ))}
        </Segment>
      </Grid.Row>
      <Grid.Row style={{ height: "48vh" }}>
        <Segment
          style={{
            height: "100%",
            width: "100%",
            overflow: "scroll",
            scrollbarWidth: "none"
          }}
        >
          <h2>Groups</h2>
        </Segment>
      </Grid.Row>
    </Fragment>
  );
};
export default CompList;

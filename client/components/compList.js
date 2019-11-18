import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, List, Icon, Segment } from "semantic-ui-react";

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
          <List divided size="big">
            {canvas.map(c => (
              <List.Item key={c.id}>
                <Icon name={c.selected ? "square" : "square outline"} />
                <List.Content>
                  <List.Header>
                    {c.x}, {c.y}
                  </List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
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

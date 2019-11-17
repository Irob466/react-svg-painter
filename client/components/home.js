import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DynamicComponent from "./dynamicComponent";
import DynamicGroup from "./dynamicGroup";
import { createItem } from "../Store/canvas";
import { getMouseLocation } from "../helpers";

export const Home = props => {
  const dispatch = useDispatch();
  const canvas = useSelector(({ canvas }) => canvas);
  // const [newPoint, setNewPoint] = useState({});

  // const _onMouseDown = ({ clientX, clientY, ...e }) => {
  //   const target = e.target;
  //   const { x, y } = getMouseLocation(clientX, clientY, target);
  //   console.log("hola!");
  //   return <Rect x={x} y={y} />;
  // };

  const _onClick = ({ clientX, clientY, ...e }) => {
    const target = e.target;
    const { x, y } = getMouseLocation(clientX, clientY, target);
    dispatch(
      createItem({
        id: `${x}.${y}`,
        component: "rect",
        selected: false,
        x,
        y
      })
    );
  };

  return (
    <svg
      width="100%"
      height="100%"
      // onMouseDown={_onMouseDown}
      onClick={_onClick}
    >
      {canvas.map(c => (
        <DynamicComponent key={c.id} {...c} />
      ))}
    </svg>
  );
};

export default Home;

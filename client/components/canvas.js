import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DynamicComponent from "./dynamicComponent";
import { createItem } from "../Store/canvas";
import { getMouseLocation } from "../helpers";

export const Canvas = props => {
  const dispatch = useDispatch();
  const canvas = useSelector(({ canvas }) => canvas);

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

export default Canvas;

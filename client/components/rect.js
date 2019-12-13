import React from "react";
import { useDispatch } from "react-redux";
import { selectItem } from "../Store/canvas";
// import { getMouseLocation } from "../helpers";

export const Rect = ({ id, x, y, selected, width = 100, height = 100 }) => {
  const dispatch = useDispatch();

  const _onClick = e => {
    e.stopPropagation();
    dispatch(selectItem(id, !selected));
    console.log(e.target.getBoundingClientRect());
  };
  return (
    <rect
      id={id}
      className={selected ? "selected" : ""}
      selected={selected}
      x={x - width / 2}
      y={y - height / 2}
      onClick={_onClick}
      width={width}
      height={height}
    />
  );
};

export default Rect;

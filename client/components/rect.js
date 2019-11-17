import React, { useState, useEffect } from "react";
import { getMouseLocation } from "../helpers";

export const Rect = ({ origX, origY, moving, width = 100, height = 100 }) => {
  const [x, setX] = useState(origX);
  const [y, setY] = useState(origY);

  const _onMouseMove = ({ clientX, clientY, ...e }) => {
    console.log(clientX, clientY);
    if (moving) {
      const target = e.target;
      const { x: newX, y: newY } = getMouseLocation(clientX, clientY, target);
      setX(newX);
      setY(newY);
    }
  };

  return (
    <rect
      className="rect"
      x={x - width / 2}
      y={y - height / 2}
      onMouseMove={_onMouseMove}
      width={width}
      height={height}
    />
  );
};

export default Rect;

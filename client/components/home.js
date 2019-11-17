import React, { useState } from "react";
import Rect from "./rect";
import { getMouseLocation } from "../helpers";

export const Home = props => {
  const [clicks, setClicks] = useState([]);
  // const [newPoint, setNewPoint] = useState({});

  // const _onMouseDown = ({ clientX, clientY, ...e }) => {
  //   const target = e.target;
  //   const { x, y } = getMouseLocation(clientX, clientY, target);
  //   console.log("hola!");
  //   return <Rect x={x} y={y} />;
  // };

  const _onClick = ({ clientX, clientY, ...e }) => {
    const target = e.target;
    const { x: origX, y: origY } = getMouseLocation(clientX, clientY, target);
    setClicks([...clicks, { origX, origY, moving: true }]);
  };

  return (
    <svg
      width="100vw"
      height="100vh"
      // onMouseDown={_onMouseDown}
      onClick={_onClick}
    >
      {clicks.map(c => (
        <Rect key={`${c.origX}${c.origY}`} {...c} />
      ))}
    </svg>
  );
};

export default Home;

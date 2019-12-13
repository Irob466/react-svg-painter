import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import DynamicComponent from "./dynamicComponent";
import {
  createItem,
  deleteSelected,
  moveSelected,
  calculateOffsets
} from "../Store/canvas";
import { setDragging } from "../Store/events";
import { getMouseLocation } from "../helpers";

export const Canvas = () => {
  const dispatch = useDispatch();
  const canvas = useSelector(({ canvas }) => canvas);
  const { dragging, rotating, resizing, prevX, prevY } = useSelector(
    ({ events }) => events
  );

  useHotkeys("delete", () => dispatch(deleteSelected()));

  const _onDoubleClick = ({ clientX, clientY, target, ...e }) => {
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

  const _onMouseDown = ({ clientX, clientY, target, ...e }) => {
    dispatch(setDragging(clientX, clientY));
    dispatch(calculateOffsets(clientX, clientY));
  };

  const _onMouseUp = () => {
    dispatch(setDragging(0, 0));
  };

  const _onMouseMove = ({ clientX, clientY, target, ...e }) => {
    if (dragging) dispatch(moveSelected(clientX, clientY));
  };

  return (
    <svg
      width="100%"
      height="100%"
      onDoubleClick={_onDoubleClick}
      onMouseDown={_onMouseDown}
      onMouseMove={_onMouseMove}
      onMouseUp={_onMouseUp}
    >
      {canvas.map(c => (
        <DynamicComponent key={c.id} {...c} />
      ))}
    </svg>
  );
};

export default Canvas;

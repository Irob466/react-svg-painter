import React from "react";
import Rect from "./rect";

export const DynamicComponent = props => {
  const getComponent = component => {
    switch (component) {
      case "circle":
        return "circles not implemented yet";
      case "rect":
        return <Rect {...component} key={component.id} />;
      default:
        return <Rect {...component} key={component.id} />;
    }
  };

  return getComponent(props);
};

export default DynamicComponent;

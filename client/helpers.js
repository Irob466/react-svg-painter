export const getMouseLocation = (clientX, clientY, target) => {
  const svg = target.closest("svg");
  let pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
};

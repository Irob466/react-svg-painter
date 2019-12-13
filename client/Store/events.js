const initialState = {
  dragging: false,
  resizing: false,
  rotating: false,
  prevX: 0,
  prevY: 0
};

const [DRAGGING, RESIZING, ROTATING] = ["DRAGGING", "RESIZING", "ROTATING"];

export const setDragging = (clientX, clientY) => ({
  type: DRAGGING,
  clientX,
  clientY
});

export const setResizing = () => ({
  type: RESIZING
});

export const setRotating = () => ({
  // can potentially delete multiple items?
  // will filter to selected items for now
  type: ROTATING
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DRAGGING:
      return {
        ...state,
        dragging: !state.dragging,
        prevX: action.clientX,
        prevY: action.clientY
      };
    case RESIZING:
      return { ...state, resizing: !state.resizing };
    case ROTATING:
      return { ...state, rotating: !state.rotating };
    default:
      return state;
  }
};

const initialState = [];

const [
  CREATE_ITEM,
  MOVE_SELECTED,
  DELETE_SELECTED,
  SELECT_ITEM,
  CALCULATE_OFFSETS
] = [
  "CREATE_ITEM",
  "MOVE_SELECTED",
  "DELETE_SELECTED",
  "SELECT_ITEM",
  "CALCULATE_OFFSETS"
];

export const createItem = item => ({
  type: CREATE_ITEM,
  item
});

export const moveSelected = (clientX, clientY) => ({
  type: MOVE_SELECTED,
  clientX,
  clientY
});

export const calculateOffsets = (clientX, clientY) => ({
  type: CALCULATE_OFFSETS,
  clientX,
  clientY
});

export const deleteSelected = () => ({
  // can potentially delete multiple items?
  // will filter to selected items for now
  type: DELETE_SELECTED
});

export const selectItem = (id, selected) => ({
  type: SELECT_ITEM,
  id,
  selected
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, action.item];
    case SELECT_ITEM:
      return state.map(s =>
        s.id === action.id
          ? {
              ...s,
              selected: action.selected
            }
          : s
      );
    case MOVE_SELECTED:
      return state.map(s => {
        if (!s.selected) {
          return s;
        } else {
          return {
            ...s,
            x: action.clientX + s.offsetX,
            y: action.clientY + s.offsetY
          };
        }
      });
    case CALCULATE_OFFSETS:
      return state.map(s => ({
        ...s,
        offsetX: s.x - action.clientX,
        offsetY: s.y - action.clientY
      }));
    case DELETE_SELECTED:
      return state.filter(s => !s.selected);
    default:
      return state;
  }
};

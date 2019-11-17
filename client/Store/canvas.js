const initialState = [];

const [CREATE_ITEM, MOVE_ITEM, DELETE_ITEM, SELECT_ITEM] = [
  "CREATE_ITEM",
  "MOVE_ITEM",
  "DELETE_ITEM",
  "SELECT_ITEM"
];

export const createItem = item => ({
  type: CREATE_ITEM,
  item
});

export const moveItem = offset => ({
  type: MOVE_ITEM,
  offset
});

export const deleteItem = () => ({
  // can potentially delete multiple items?
  // will filter to selected items for now
  type: DELETE_ITEM
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
    case MOVE_ITEM:
      return [
        ...state,
        ...state
          .filter(s => s.selected)
          .map(s => ({
            ...s,
            x: s.x + action.offset.x,
            y: s.y + action.offset.y
          }))
      ];
    case DELETE_ITEM:
      return state.filter(s => !s.selected);
    default:
      return state;
  }
};

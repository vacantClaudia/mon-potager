// === action types
export const CHANGE_IS_VISIBLE = 'CHANGE_IS_VISIBLE';

// === action creators
export const changeIsVisible = (value) => ({
  type: CHANGE_IS_VISIBLE,
  value,
});

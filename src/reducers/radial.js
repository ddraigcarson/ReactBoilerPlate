import actionTypes from "../actions/actionTypes";

const initialState = {
  open: false,
}

export default function radial(state = initialState, action) {
  switch (action.type) {
  case actionTypes.OPEN_MENU:
    return {
      ...state,
      open: action.payload,
    };
  }
  return state;
}

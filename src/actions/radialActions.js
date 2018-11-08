import actionTypes from "./actionTypes";

export function openMenu(payload) {
  return {
    type: actionTypes.OPEN_MENU,
    payload: payload
  };
}

import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    const { type, msg } = action.payload;
    return { ...state, showAlert: true, alertType: type, alertText: msg };
  }
  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertType: "", alertText: "" };
  }
  return { ...state };
};

export default reducer;

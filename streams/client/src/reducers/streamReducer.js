import _ from "lodash";
import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  LIST_STREAM,
  SHOW_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LIST_STREAM:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case SHOW_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); //omit creates a new object
    default:
      return state;
  }
};

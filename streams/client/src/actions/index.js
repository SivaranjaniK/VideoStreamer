import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  LIST_STREAM,
  SHOW_STREAM
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });
    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    });
    history.push("/");
  };
};

export const editStream = (id, formValues) => {
  return async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({
      type: EDIT_STREAM,
      payload: response.data
    });
    history.push("/");
  };
};

export const deleteStream = id => {
  return async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
      type: DELETE_STREAM,
      payload: id
    });
    history.push("/");
  };
};

export const listStream = () => {
  return async dispatch => {
    const response = await streams.get("/streams");
    dispatch({
      type: LIST_STREAM,
      payload: response.data
    });
  };
};

export const showStream = id => {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
      type: SHOW_STREAM,
      payload: response.data
    });
  };
};

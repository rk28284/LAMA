import {
    CREATE_FILE_SUCCESS,
    DELETE_FILE_SUCCESS,
    FILE_OPERATION_FAILURE,
    GET_FILE_SUCCESS,
    UPDATE_FILE_SUCCESS,
  } from "../actionTypes";
  
  const initialState = {
    project: {},
    error: false,
  };
  
  const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_FILE_SUCCESS:
      case GET_FILE_SUCCESS:
      case UPDATE_FILE_SUCCESS:
        return {
          ...state,
          project: action.payload,
        };
      case DELETE_FILE_SUCCESS:
        return {
          ...state,
          project: {},
        };
      case FILE_OPERATION_FAILURE:
        return {
          ...state,
          project: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default fileReducer;
  
import axios from "axios";
import {
  PROJECTS_REQUEST,
  PROJECTS_SUCCESS,
  PROJECTS_FAILURE,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILED,
  DELETE_FILE_SUCCESS,
  CREATE_FILE_SUCCESS,
  UPDATE_FILE_SUCCESS,
  GET_FILE_SUCCESS,
  FILE_OPERATION_FAILURE,
} from "./actionTypes";

const apiUrl = "https://zuraventurebackend.onrender.com/";

export const loginOrCreateUser = (email) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/user`, { email });
    const { token, existingUser } = response.data;
    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
    localStorage.setItem("email", email);

    if (token) {
      localStorage.setItem("token", token);
    }

    dispatch({ type: LOGIN_SUCCESS, payload: { token, existingUser } });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

const accessToken = localStorage.getItem("token");
const config = {
  headers: {
    authorization: `${accessToken}`,
  },
};

export const createProjectForLoggedInUser = (email, projectName) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${apiUrl}/project/create`,
      {
        email,
        projectName,
      },
      config
    );
    const { newProject } = response.data;

    dispatch({
      type: CREATE_PROJECT_SUCCESS,
      payload: newProject,
    });
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_FAILED, payload: error.message });
  }
};

export const fetchProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECTS_REQUEST });

    const response = await axios.get(`${apiUrl}/project`, config);

    dispatch({
      type: PROJECTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    dispatch({
      type: PROJECTS_FAILURE,
      payload: error,
    });
  }
};

export const fetchProjectFiles = async (projectId) => {
  try {
    const response = await axios.get(
      `${apiUrl}/project/${projectId}`,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const createFile = (projectId, fileName, fileData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${apiUrl}/file/${projectId}`,
        {
          fileName,
          fileData,
        },
        config
      );
      dispatch({ type: CREATE_FILE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FILE_OPERATION_FAILURE, payload: error.message });
    }
  };
};

export const deleteFile = (fileId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/file/${fileId}`, config);
    dispatch({ type: DELETE_FILE_SUCCESS });
  } catch (error) {
    dispatch({ type: FILE_OPERATION_FAILURE, payload: error.message });
  }
};

export const getFileById = (fileId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${apiUrl}/file/${fileId}`,
      config
    );
    dispatch({ type: GET_FILE_SUCCESS, payload: response.data });
    return response;
  } catch (error) {
    dispatch({ type: FILE_OPERATION_FAILURE, payload: error.message });
  }
};

export const updateFile = (fileId, fileData) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `${apiUrl}/file/${fileId}`,
      { fileData },
      config
    );
    dispatch({ type: UPDATE_FILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FILE_OPERATION_FAILURE, payload: error.message });
  }
};

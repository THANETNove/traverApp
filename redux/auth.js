// auth.js
import axios from "axios";

const getUrl = () => {
  const https_url = "http://localhost/project/travel_API";
  /*   const https_url = "https://medocargo.com/API"; */
  return https_url;
};
const url = getUrl();

export const types = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  REGISTER: "REGISTER",
  REGISTER_SUCCEED: "REGISTER_SUCCEED",
  REGISTER_FAIL: "REGISTER_FAIL",
};

export const loginUser = async (auth) => {
  try {
    const params = {
      isAdd: true,
      auth: auth,
    };
    const response = await axios.get(`${url}/getProductTypeListId.php`, {
      params,
    });
    if (response.data.message) {
      return {
        type: types.LOGIN_USER,
        payload: response.data,
      };
    } else {
      return {
        type: types.LOGIN_USER,
        payload: {
          status: "unknown",
        },
      };
    }
  } catch (error) {
    return {
      type: types.LOGIN_USER,
      payload: {
        status: "error",
        message: error.message,
      },
    };
  }
};

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});

export const registerUser = (e, dispatch) => ({
  type: types.REGISTER,
  action: register_api(e, dispatch),
});

export const register_api = async (e, dispatch) => {
  const formData = new FormData();
  formData.append("isAdd", true);
  for (let key in e) {
    formData.append(key, e[key]);
  }

  try {
    const response = await axios.post(`${url}/register.php`, formData, {
      headers: {
        "Content-Type": "multipart/form-data;charset=utf-8",
      },
    });
  
    if (response.data.message) {
      dispatch({
        type: types.REGISTER_SUCCEED,
        payload: response.data.data, // ส่งข้อมูลข้อผิดพลาดไปยัง reducer
      });
    } else {
      dispatch({
        type: types.REGISTER_FAIL,
        payload: response.data.error, // ส่งข้อมูลข้อผิดพลาดไปยัง reducer
      });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      type: types.REGISTER_FAIL,
      payload: error,
    };
  }
};

const INIT_STATE = {
  user: null,
  statusUser: "default",
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        user: action.payload.auth,
        statusUser: "success",
      };

    case types.LOGOUT_USER:
      return {
        ...state,
        user: null,
        statusUser: "default",
      };
    case types.REGISTER:
      return state; // No need to change here
    case types.REGISTER_SUCCEED:
      return {
        ...state,
        user: action.payload,
        statusUser: "success", // Set statusUser to "failure"
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        statusUser: action.payload, // Set statusUser to "failure"
      };

    default:
      return { ...state };
  }
}

// auth.js
import axios from "axios";

const getUrl = () => {
  const https_url = "http://localhost/project/trave_api";
  /*   const https_url = "https://medocargo.com/API"; */
  return https_url;
};
const url = getUrl();

export const types = {
  LOGIN_USER: "LOGIN_USER",
  LOGIN_SUCCEED: "LOGIN_SUCCEED",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
  REGISTER: "REGISTER",
  REGISTER_SUCCEED: "REGISTER_SUCCEED",
  REGISTER_FAIL: "REGISTER_FAIL",
  CLICK_EMAIL: "CLICK_EMAIL",
  CLICK_EMAIL_SUCCEED: "CLICK_EMAIL_SUCCEED",
  CLICK_EMAIL_FAIL: "CLICK_EMAIL_FAIL",
  NEW_PASSWORD: "NEW_PASSWORD",
  NEW_PASSWORD_SUCCEED: "NEW_PASSWORD_SUCCEED",
  NEW_PASSWORD_FAIL: "NEW_PASSWORD_FAIL",
  CLEAR_STATUS: "CLEAR_STATUS",
};

export const loginUser = (email, password, dispatch) => ({
  type: types.LOGIN_USER,
  action: login_api(email, password, dispatch),
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});
export const clearStatus = () => ({
  type: types.CLEAR_STATUS,
});

export const registerUser = (e, dispatch) => ({
  type: types.REGISTER,
  action: register_api(e, dispatch),
});
export const clickEmail = (email, dispatch) => ({
  type: types.CLICK_EMAIL,
  action: clickEmail_api(email, dispatch),
});
export const updatePassword = (id, email, dispatch) => ({
  type: types.NEW_PASSWORD,
  action: updatePassword_api(id, email, dispatch),
});

export const login_api = async (email, password, dispatch) => {

  const formData = new FormData(); // ประกาศตัวแปร formData
  formData.append("isAdd", true);
  formData.append("email", email);
  formData.append("password", password);

  try {
    const response = await axios.post(`${url}/login.php`, formData, {
      headers: {
        "Content-Type": "multipart/form-data;charset=utf-8",
      },
    });

    if (response.data.message) {
      dispatch({
        type: types.LOGIN_SUCCEED,
        payload: response.data.data, // ส่งข้อมูลข้อไปยัง reducer
      });
    } else {
      dispatch({
        type: types.LOGIN_FAIL,
        payload: "fail", // ส่งข้อมูลข้อผิดพลาดไปยัง reducer
      });
    }
  } catch (error) {
    return {
      type: types.REGISTER_FAIL,
      payload: "error",
    };
  }
};

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
    return {
      type: types.REGISTER_FAIL,
      payload: error,
    };
  }
};

export const clickEmail_api = async (email, dispatch) => {
  const formData = new FormData();
  formData.append("isAdd", true);
  formData.append("email", email);

  try {
    const response = await axios.post(`${url}/clickEmail.php`, formData, {
      headers: {
        "Content-Type": "multipart/form-data;charset=utf-8",
      },
    });
    if (response.data.message) {
      dispatch({
        type: types.CLICK_EMAIL_SUCCEED,
        payload: response.data, // ส่งข้อมูลข้อผิดพลาดไปยัง reducer
      });
    }
  } catch (error) {
    return {
      type: types.CLICK_EMAIL_FAIL,
      payload: error,
    };
  }
};
export const updatePassword_api = async (id, password, dispatch) => {
  const formData = new FormData();
  formData.append("isAdd", true);
  formData.append("id", id);
  formData.append("password", password);

  try {
    const response = await axios.post(`${url}/updatePassword.php`, formData, {
      headers: {
        "Content-Type": "multipart/form-data;charset=utf-8",
      },
    });
    if (response.data.message) {
      dispatch({
        type: types.NEW_PASSWORD_SUCCEED,
        payload: response.data.message, // ส่งข้อมูลข้อผิดพลาดไปยัง reducer
      });
    }
  } catch (error) {
    return {
      type: types.NEW_PASSWORD_FAIL,
      payload: response.data.error,
    };
  }
};

const INIT_STATE = {
  user: null,
  statusUser: "default",
  statusEmail: "default",
  idEmail: null,
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, statusUser: "load" };
    case types.LOGIN_SUCCEED:
      return {
        ...state,
        user: action.payload,
        statusUser: "success", // Set statusUser to "failure"
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        statusUser: action.payload, // Set statusUser to "failure"
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        statusUser: action.payload, // Set statusUser to "failure"
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        user: null,
        statusUser: "default",
        statusEmail: "default",
        idEmail: null,
        statusUpdatePassword: "default",
      };
    case types.REGISTER:
      return { ...state, statusUser: "load" }; // No need to change here
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
    case types.REGISTER:
      return { ...state, statusEmail: "load" };
    case types.CLICK_EMAIL_SUCCEED:
      return {
        ...state,
        statusEmail: action.payload.message,
        idEmail: action.payload.data,
      };
    case types.CLICK_EMAIL_FAIL:
      return { ...state, statusEmail: action.payload };
    case types.NEW_PASSWORD:
      return { ...state, statusUpdatePassword: "load" };
    case types.NEW_PASSWORD_SUCCEED:
      return { ...state, statusUpdatePassword: action.payload };
    case types.NEW_PASSWORD_FAIL:
      return { ...state, statusUpdatePassword: action.payload };
    case types.CLEAR_STATUS:
      return {
        ...state,
        statusUser: "default",
        statusEmail: "default",
        idEmail: null,
        statusUpdatePassword: "default",
      };
    default:
      return { ...state };
  }
}

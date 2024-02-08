// auth.js

const getUrl = () => {
  /* const https_url = "http://localhost/project/API"; */
  const https_url = "https://medocargo.com/API";
  return https_url;
};
const url = getUrl();

export const types = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
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

    default:
      return { ...state };
  }
}

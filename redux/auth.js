// auth.js
export const types = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
};

export const loginUser = (auth) => ({
  type: types.LOGIN_USER,
  payload: { auth },
});

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

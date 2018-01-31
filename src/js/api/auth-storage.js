export const SESSION_ITEM = "__SESSION_ITEM__";
export const UNAUTHENTICATED_USER = "auth/unauthenticated";

export const getToken = () => {
  const token = window.localStorage.getItem(SESSION_ITEM);
  if (token) {
    return token;
  } else {
    throw UNAUTHENTICATED_USER;
  }
};

export const setToken = token => {
  window.localStorage.setItem(SESSION_ITEM, token);
};

export const clearToken = () => {
  window.localStorage.removeItem(SESSION_ITEM);
};

export const isAuthenticated = () => {
  return window.localStorage.getItem(SESSION_ITEM) !== null;
};

/*
* HOC d'auth.
*/
import * as React from "react";
import { Redirect } from "react-router-dom";
import { getToken } from "js/api";

const authenticated = (Component: component) => props => {
  try {
    getToken();
  } catch (e) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: window.location.pathname }
        }}
      />
    );
  }
  return <Component {...props} />;
};

export default authenticated;

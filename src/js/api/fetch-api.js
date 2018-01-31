import { getToken, UNAUTHENTICATED_USER } from "./auth-storage";

export class ForbidenException {}
export class UnauthorizedException {}

export const getAuth = url => {
  try {
    const headers = authJwt.getHeaders();

    return fetch(url, {
      method: "GET",
      headers: headers
    })
      .then(response => {
        if (response.status === 401) {
          throw new UnauthorizedException();
        } else if (response.status === 403) {
          throw new ForbidenException();
        } else {
          return response.json();
        }
      })
      .catch(e => {
        throw e;
      });
  } catch (e) {
    if (e === UNAUTHENTICATED_USER) {
      return Promise.reject("Utilisateur non authentifié");
    }
  }
};

const bodyRequest = verbe => (url, json) => {
  const headers = authJwt.getHeaders();

  let config = {
    method: verbe,
    headers,
    body: JSON.stringify(json)
  };
  return fetch(url, config)
    .then(response => {
      if (response.status === 401) {
        throw new UnauthorizedException();
      } else if (response.status === 403) {
        throw new ForbidenException();
      } else {
        return response.json();
      }
    })
    .catch(e => {
      throw e;
    });
};

const authJwt = {
  getHeaders: () => {
    const headers = new Headers();
    const token = getToken();

    headers.set("Authorization", `Bearer ${token}`);
    headers.set("Content-Type", "application/json;charset=utf-8");
    headers.set("Accept", "application/json;charset=utf-8");

    return headers;
  }
};

export const postAuth = bodyRequest("POST");
export const putAuth = bodyRequest("PUT");
export const deleteAuth = bodyRequest("DELETE");

import { getToken, UNAUTHENTICATED_USER } from "./auth-storage";

export class ForbidenException {}
export class UnauthorizedException {}

export const getAuth = url => {
  try {
    const headers = authJwt.getHeaders();
    headers.set("Content-Type", "application/json;charset=utf-8");
    headers.set("Accept", "application/json;charset=utf-8");

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

const authJwt = {
  getHeaders: () => {
    const headers = new Headers();
    const token = getToken();

    headers.set("Authorization", `Bearer ${token}`);

    return headers;
  }
};

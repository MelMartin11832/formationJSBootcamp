import { getAuth } from "./../../api/fetch-api";

export const UTILISATEUR_CHARGE = "app/utilisateurCharge";
export const PRELOADER_START = "app/preloaderStart";
export const PRELOADER_STOP = "app/preloaderStop";
export const DECONNEXION = "app/userDeconnexion";

const ROOT_PATH = process.env.REACT_APP_BACK_END_PATH;

export const chargerUtilisateur = () => (dispatch, getState) => {
  dispatch(preloaderStart());
  getAuth(`${ROOT_PATH}/resources/utilisateurs`)
    .then(utilisateur => {
      dispatch(preloaderStop());
      dispatch(utilisateurCharge(utilisateur));
    })
    .catch(error => {
      dispatch(preloaderStop());
      console.error("utilisateur non identifié ! attention, l'application ne fonctionnera pas correctement !");
    });
};

export const utilisateurCharge = utilisateur => ({ type: UTILISATEUR_CHARGE, utilisateur });
export const preloaderStart = () => ({ type: PRELOADER_START });
export const preloaderStop = () => ({ type: PRELOADER_STOP });
export const deconnexion = () => ({ type: DECONNEXION });

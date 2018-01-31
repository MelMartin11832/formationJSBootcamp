import * as actions from "./../actions";

const initial = {
  utilisateur: null, // utilisateur connecté
  waiting: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case actions.UTILISATEUR_CHARGE: {
      const { utilisateur } = action;
      return { ...state, utilisateur };
    }
    case actions.PRELOADER_START: {
      return { ...state, waiting: true };
    }
    case actions.PRELOADER_STOP: {
      return { ...state, waiting: false };
    }
    case actions.DECONNEXION: {
      return { ...initial };
    }
    default:
      return state;
  }
};

import * as actions from "js/redux/actions";
const initial = { templatesOperationsUtilisateur: [], templateOperationChoisi: null };

export default (state = initial, action) => {
  switch (action.type) {
    case actions.TEMPLATES_OPERATIONS_CHARGES: {
      const { templates } = action;
      return { ...state, templatesOperationsUtilisateur: templates };
    }
    case actions.DECONNEXION: {
      return { ...initial };
    }
    default:
      return state;
  }
};

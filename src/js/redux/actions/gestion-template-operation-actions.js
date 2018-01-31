import { fetchTemplates } from "./../../store/store-template-operation";
import { preloaderStart, preloaderStop } from "./application-actions";
export const TEMPLATES_OPERATIONS_CHARGES = "gestTempOpe/tempOpeCherges";

/**
 * Seul les templates de l'utilisateur sont chargés.
 * L'idep sera extrait du jwt côté serveur : on ne le transmet pas ici (même si on l'a)
 */
export const chargerTemplatesOperations = () => (dispatch, getState) => {
  dispatch(preloaderStart());
  fetchTemplates()
    .then(templates => {
      dispatch(preloaderStop());
      dispatch(templatesOperationsCharges(templates));
    })
    .catch(error => {
      console.log(error);
      // TODO dispatch et redirect vers une page d'erreur
    });
};

export const templatesOperationsCharges = templates => ({ type: TEMPLATES_OPERATIONS_CHARGES, templates });

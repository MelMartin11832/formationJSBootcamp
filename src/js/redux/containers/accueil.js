import { connect } from "react-redux";
import { Accueil } from "js/components/accueil";
import { deconnexion } from "./../actions";

const accueilProps = state => {
  const { utilisateur } = state.app;
  return { utilisateur };
};

const accueilDispatch = dispatch => ({
  reinitialiserUtilisateur: () => {
    dispatch(deconnexion());
  }
});

export default connect(accueilProps, accueilDispatch)(Accueil);

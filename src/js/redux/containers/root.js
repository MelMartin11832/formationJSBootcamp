import { connect } from "react-redux";
import Root from "./../../components/root";
import { chargerUtilisateur } from "js/redux/actions";

const rootProps = state => {
  const { utilisateur } = state.app;
  return { utilisateur };
};

const rootDispatch = dispatch => ({
  chargerUtilisateur: idep => {
    dispatch(chargerUtilisateur(idep));
  }
});

export default connect(rootProps, rootDispatch)(Root);

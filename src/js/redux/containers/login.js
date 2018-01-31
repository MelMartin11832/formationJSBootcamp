import { connect } from "react-redux";
import Login from "./../../components/auth/login";
import { chargerUtilisateur } from "js/redux/actions";

export default connect(undefined, dispatch => ({
  chargerUtilisateur: () => dispatch(chargerUtilisateur())
}))(Login);

import { connect } from "react-redux";
import { TableauDeBord } from "js/components/tableau-de-bord";
import { chargerTemplatesOperations } from "js/redux/actions";

const tbdToProps = state => {
  const { templatesOperationsUtilisateur } = state.gestionTemplateOperation;
  return { templates: templatesOperationsUtilisateur };
};

const tbdDispatch = dispatch => ({
  chargerTemplatesOperations: () => {
    dispatch(chargerTemplatesOperations());
  }
});

export default connect(tbdToProps, tbdDispatch)(TableauDeBord);

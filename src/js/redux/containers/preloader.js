import { connect } from "react-redux";
import Preloader from "./../../components/preloader/preloader";

export default connect(state => ({ active: state.app.waiting }))(Preloader);

import { combineReducers } from "redux";
import app from "./reducers/application-reducer";
import gestionTemplateOperation from "./reducers/gestion-template-operation";

export default combineReducers({ app, gestionTemplateOperation });

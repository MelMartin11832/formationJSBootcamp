import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageTitle from "js/components/shared/page-title";
import { TableauDeBord, Accueil, TemplateOperationnel } from "js/redux/containers";
import Home from "js/components/home";
import * as menu from "./menu";
import { Preloader } from "./../redux/containers";
import { Login } from "js/redux/containers";

import "css/app.css";

class Root extends React.Component {
  componentWillMount() {
    const { utilisateur, chargerUtilisateur } = this.props;
    if (utilisateur === null) {
      chargerUtilisateur();
    }
  }

  componentWillUpdate(nextProps) {
    const { utilisateur, chargerUtilisateur } = nextProps;
    if (utilisateur === null) {
      chargerUtilisateur();
    }
  }

  render() {
    const hello = this.props.utilisateur ? <Hello idep={this.props.utilisateur.idep} /> : null;
    return (
      <div className="application container">
        <Preloader />
        <PageTitle title="Spoc administration" />
        {hello}
        <Router>
          <span>
            <Route exact path="/" component={Home} />

            <Switch>
              <Route path="/login" component={Login} />
              <menu.MenuOnglet>
                <menu.MenuItem title="Accueil" eventKey={1}>
                  <Route exact path="/accueil" component={Accueil} />
                </menu.MenuItem>
                <menu.MenuItem title="Tableau de bord" eventKey={2}>
                  <Route exact path="/tableau-de-bord" component={TableauDeBord} />
                  <Route exact path="/template-operationnel/:id" component={TemplateOperationnel} />
                </menu.MenuItem>
              </menu.MenuOnglet>
            </Switch>
          </span>
        </Router>
      </div>
    );
  }
}

const Hello = ({ idep }) => <div className="welcome">Bonjour {idep} !</div>;

export default Root;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageTitle from "js/components/shared/page-title";
import * as menu from "./menu";

import Login from "./auth/login";
import Accueil from "./accueil/accueil";
import Home from "js/components/home";

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
                <menu.MenuItem title="home" eventKey={2}>
                  <Route exact path="/home" component={Home} />
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

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageTitle from "js/components/shared/page-title";
import * as menu from "./menu";
import Login from "./auth/login";
import Home from "js/components/home";
import WithoutAuth from "js/components/without-auth";
import WithAut from "js/components/with-auth";
import Bootstrap from "js/components/bootstrap";

import "css/app.css";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  handleChangeUser = user => this.setState({ user });

  render() {
    const { user } = this.state;
    return (
      <div className="application container">
        <Router>
          <span>
            <PageTitle
              path="/"
              title="Spoc administration"
              user={this.state.user}
              handleChangeUser={this.handleChangeUser}
            />
            <Switch>
              <Route
                path="/login"
                component={props => <Login {...props} user={user} handleChangeUser={this.handleChangeUser} />}
              />
              <menu.MenuOnglet>
                <menu.MenuItem title="Accueil" eventKey={1}>
                  <Route exact path="/" component={Home} />
                </menu.MenuItem>
                <menu.MenuItem title="Composant SANS auth" eventKey={2}>
                  <Route exact path="/whithout-auth" component={WithoutAuth} />
                </menu.MenuItem>
                <menu.MenuItem title="Composant AVEC auth" eventKey={3}>
                  <Route exact path="/with-auth" component={props => <WithAut {...props} user={user} />} />
                </menu.MenuItem>
                <menu.MenuItem title="Exemple Bootsrap" eventKey={4}>
                  <Route exact path="/bootstrap" component={Bootstrap} />
                </menu.MenuItem>
              </menu.MenuOnglet>
            </Switch>
          </span>
        </Router>
      </div>
    );
  }
}

export default Root;

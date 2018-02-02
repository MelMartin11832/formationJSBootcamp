import * as React from "react";
import { Button } from "react-bootstrap";
import { clearToken, isAuthenticated } from "js/api";
import authenticated from "./../auth/authenticated-component";
import "./accueil.css";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: isAuthenticated() };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    clearToken();
    this.setState({ isAuthenticated: false });
  }

  render() {
    return (
      <div className="accueil">
        <h1>Bienvenue sur l'application de gestion de SPOC</h1>
        <div className="deconnexion">
          <Button disabled={!this.state.isAuthenticated} onClick={this.handleClick}>
            deconnexion
          </Button>
        </div>
      </div>
    );
  }
}

// TODO les prop-types

export default authenticated(Accueil);

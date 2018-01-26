import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PageTitle from "js/components/shared/page-title";
import Tab from "js/components/shared/tab";
import Img from "js/components/shared/img";
import { data } from "./data";
import { getAuth, ForbidenException, UnauthorizedException } from "./../api/fetch-api";

const BACK_END_PATH = process.env.REACT_APP_BACK_END_PATH;

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigSize: false,
      redirect: ""
    };
    this.toggleSize = () =>
      this.setState({
        bigSize: !this.state.bigSize
      });
    this.onClickReturn = () =>
      this.setState({
        redirect: "/"
      });
  }

  componentWillMount() {
    /*
    * Fetch example : ici on est sensé être authentifié.
    */
    getAuth(`${BACK_END_PATH}/resources/templates/all`)
      .then(templates => {
        console.log("succés !", templates);
      })
      .catch(e => {
        if (e.constructor.name === ForbidenException.name) {
          console.error("Privilèges insuffisants.");
        } else if (e.constructor.name === UnauthorizedException.name) {
          console.error("Utilisateur non authentifié.");
        } else {
          console.error("erreur inconnue.", e);
        }
      });
  }

  render() {
    const { redirect, bigSize } = this.state;

    if (redirect) return <Redirect to={redirect} />;

    const img = data.map(d => {
      return {
        title: d.label,
        body: <Img path={d.path} label={d.label} bigSize={bigSize} toggleSize={this.toggleSize} key={d.path} />
      };
    });

    return (
      <div className="contenu">
        <PageTitle title="Example page title" />
        <div className="row">
          <button className="btn btn-primary btn-lg col-md-2" onClick={this.onClickReturn}>
            Retour
          </button>
        </div>
        <Tab elements={img} />
      </div>
    );
  }
}

export default Example;

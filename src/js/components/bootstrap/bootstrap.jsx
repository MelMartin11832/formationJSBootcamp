import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./bootstrap.css";

class Bootstrap extends Component {
  constructor(props) {
    super(props);
    this.handleLog = () => console.log("Click on action");
  }

  render() {
    // Tableau vide de
    const array = Array.from(Array(12));
    const columns = array.map((a, index) => (
      <div key={index + 1} className="col-md-1 centered border">
        Col {index + 1}
      </div>
    ));
    return (
      <div>
        <div className="row">
          <h3 className="centered">BS Grid (12 colonnes)</h3>
        </div>
        <div className="row">{columns}</div>
        <div className="row">
          <h3 className="centered">BS Grid (Offset)</h3>
        </div>
        <div className="row">
          <div className="col-md-3 col-md-offset-7 centered border">Col de taille 3 avec offset de 7</div>
        </div>
        <div className="row">
          <h3 className="centered">BS CSS buttons</h3>
        </div>
        <div className="row">
          <div className="col-md-2 col-md-offset-2">
            <Link className="btn btn-primary btn-lg col-md-12" to="/">
              Link to Home
            </Link>
          </div>
          <div className="col-md-2 col-md-offset-4">
            <button className="btn btn-primary btn-lg col-md-12" onClick={this.handleLog}>
              Action
            </button>
          </div>
        </div>
        <div className="row">
          <h3 className="centered">React BS buttons</h3>
        </div>
        <div className="row">
          <div className="col-md-2 col-md-offset-2">
            <Link to="/">
              <Button bsStyle="primary" className="col-md-12">
                Link to Home
              </Button>
            </Link>
          </div>
          <div className="col-md-2 col-md-offset-4">
            <Button bsStyle="primary" className="col-md-12" onClick={this.handleLog}>
              Action
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Bootstrap;

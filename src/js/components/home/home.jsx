import React, { Component } from "react";
import { sample } from "./sample";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { bonus: false };
    this.handleBonus = c => this.setState({ bonus: c.target.checked });
  }
  render() {
    const { bonus } = this.state;
    const id = bonus ? "JCVD" : "LATIN";
    const text = sample.find(s => s.type === id).text;
    return (
      <div className="contenu">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h2 className="centered">Page d'accueil</h2>
          </div>
        </div>
        <div className="row centered">
          <label>
            {"Texte bonus : "}
            <input type="checkbox" checked={bonus} onChange={this.handleBonus} />
          </label>
        </div>
        <div className="row">{text}</div>
        <div className="row centered">© http://www.faux-texte.com</div>
      </div>
    );
  }
}

export default Home;

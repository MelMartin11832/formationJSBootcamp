import * as React from "react";
import { Redirect } from "react-router-dom";
import { FormControl, ControlLabel, PageHeader } from "react-bootstrap";
import ButtonBootCamp from "js/components/shared/button";
import jwt from "jsonwebtoken";
import { setToken } from "js/api";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeIdep = this.handleChangeIdep.bind(this);
    this.state = { idep: "" };
  }

  handleClick() {
    const exp = Math.floor(Date.now() / 1000) + 3000000000;
    setToken(jwt.sign({ idep: this.state.idep, exp }, "bootcamp-js"));
    this.props.handleChangeUser(this.state.idep);
  }

  handleChangeIdep(e) {
    this.setState({ idep: e.target.value });
  }

  render() {
    const { user } = this.props;
    const { idep } = this.state;
    if (user) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    } else {
      return (
        <div className="row centered">
          <div className="col-md-4 col-md-offset-4">
            <PageHeader>Login fack</PageHeader>
            <ControlLabel>Idep</ControlLabel>
            <FormControl type="text" value={idep} placeholder="Idep" onChange={this.handleChangeIdep} />
            <ButtonBootCamp action={this.handleClick} label="Authentification" disabled={!Boolean(idep)} />
          </div>
        </div>
      );
    }
  }
}

export default Login;

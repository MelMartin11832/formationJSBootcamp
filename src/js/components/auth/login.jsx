import jwt from "jsonwebtoken";
import { setToken } from "js/api";
import * as React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { FormControl, ControlLabel, Button, PageHeader } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeIdep = this.handleChangeIdep.bind(this);
    this.state = { done: false, idep: "" };
  }

  handleClick() {
    this.setState({ ...this.state, done: true });
    const exp = Math.floor(Date.now() / 1000) + 3000000000;
    setToken(jwt.sign({ idep: this.state.idep, exp }, "bootcamp-js"));
  }

  handleChangeIdep(e) {
    this.setState({ ...this.state, idep: e.target.value });
  }

  render() {
    const { done } = this.state;
    if (done) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    } else {
      return (
        <div>
          <PageHeader>Login fack</PageHeader>
          <ControlLabel>Idep</ControlLabel>
          <FormControl type="text" value={this.state.value} placeholder="Idep" onChange={this.handleChangeIdep} />
          <Button onClick={this.handleClick}>Auth</Button>
        </div>
      );
    }
  }
}

export default Login;

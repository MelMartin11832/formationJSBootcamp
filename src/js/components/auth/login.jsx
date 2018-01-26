import jwt from "jsonwebtoken";
import { setToken } from "./auth-storage";
import * as React from "react";
import { Redirect } from "react-router-dom";
import { ROLES_SPOC } from "./../../constantes";
import { Checkbox } from "react-bootstrap";

// const ROLE_ADMIN = "role_admin";
// const ROLE_GLANDU = "role_glandu";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
    this.state = { done: false, roles: [] };
  }

  handleClick() {
    this.setState({ ...this.state, done: true });
  }

  handleClickCheckbox(e) {
    const { value, checked } = e.target;
    const { roles } = this.state;

    if (checked) {
      roles.push(value);
    } else {
      const index = roles.indexOf(value);
      if (index !== -1) {
        roles.splice(index, 1);
      }
    }
    this.setState({ roles });
  }

  render() {
    const { roles, done } = this.state;
    if (done) {
      const exp = Math.floor(Date.now() / 1000) + 3000000000;
      setToken(jwt.sign({ bar: "foo", exp, roles }, "bootcamp-js"));
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    } else {
      const checkboxes = ROLES_SPOC.map((role, i) => (
        <CheckRole key={i} role={role} handleClick={this.handleClickCheckbox} />
      ));
      return (
        <div>
          <h1>Login fack</h1>
          {checkboxes}
          <input type="button" value="Auth" onClick={this.handleClick} />
        </div>
      );
    }
  }
}

const CheckRole = ({ role, handleClick }) => (
  <div className="role">
    <label>
      {`Role ${role} :`}
      <Checkbox value={role} onClick={handleClick}>
        {role}
      </Checkbox>
    </label>
  </div>
);

export default Login;

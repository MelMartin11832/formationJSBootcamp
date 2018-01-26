import jwt from "jsonwebtoken";
import { setToken } from "./auth-storage";
import * as React from "react";
import { Redirect } from "react-router-dom";

const ROLE_ADMIN = "role_admin";
const ROLE_GLANDU = "role_glandu";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { done: false, roles: [ROLE_ADMIN] };
  }

  handleClick() {
    this.setState({ ...this.state, done: true });
  }

  handleChange() {
    let roles = [ROLE_ADMIN];
    if (this.refs.role.value === "role_glandu") {
      roles = [ROLE_GLANDU];
    } else if (this.refs.role.value === "role_mixte") {
      roles = [ROLE_ADMIN, ROLE_GLANDU];
    }
    this.setState({ ...this.state, roles });
  }

  render() {
    const { roles, done } = this.state;
    if (done) {
      const exp = Math.floor(Date.now() / 1000) + 3000000000;
      setToken(jwt.sign({ bar: "foo", exp, roles: roles }, "bootcamp-js"));
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    } else {
      return (
        <div>
          <h1>Login fack</h1>
          <label>
            Role<select ref="role" onChange={this.handleChange}>
              <option value="role_admin">admin</option>
              <option value="role_glandu">glandu</option>
              <option value="role_mixte">admin & glandu</option>
            </select>
          </label>
          <input type="button" value="Auth" onClick={this.handleClick} />
        </div>
      );
    }
  }
}

export default Login;

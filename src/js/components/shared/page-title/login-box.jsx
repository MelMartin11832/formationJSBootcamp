import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonBootCamp from "js/components/shared/button";
import { clearToken } from "js/api";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.handleDeconnexion = () => {
      clearToken();
      props.handleChangeUser("");
    };
  }
  render() {
    return (
      <div className="col-md-3 col-md-offset-1 centered login-box">
        <h3>{`Bienvenue ${this.props.user}`}</h3>
        <div className="col-md-8 col-md-offset-2">
          <ButtonBootCamp label="Deconnexion" action={this.handleDeconnexion} />
        </div>
      </div>
    );
  }
}

LoginBox.propTypes = {
  // Assume that this component is posted only if a user is connected
  user: PropTypes.string.isRequired
};

export default LoginBox;

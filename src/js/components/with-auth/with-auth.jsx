import * as React from "react";
import PropTypes from "prop-types";
import authenticated from "./../auth/authenticated-component";

class WithAut extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="with-aut">
        <h2>{`Hey ${user}, tu as dorénavant accès à tous les secrets de SPOC administration !!!`}</h2>
      </div>
    );
  }
}

WithAut.propTypes = {
  user: PropTypes.string.isRequired
};

export default authenticated(WithAut);

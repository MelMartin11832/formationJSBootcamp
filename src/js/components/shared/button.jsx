import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonBootCamp = ({ action, label, style, disabled }) => {
  const styleD = style ? style : "btn-primary";
  if (typeof action === "string") {
    return (
      <Link className={`btn ${styleD} btn-lg col-md-12`} to={action} disabled={disabled}>
        {label}
      </Link>
    );
  }
  //if action is a function, it means a handler was passed in instead of an URL
  return (
    <button className={`btn ${styleD} btn-lg col-md-12`} onClick={action} disabled={disabled}>
      {label}
    </button>
  );
};

ButtonBootCamp.proptypes = {
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.string,
  disabled: PropTypes.bool
};

export default ButtonBootCamp;

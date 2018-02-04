import React from "react";
import PropTypes from "prop-types";
import LoginBox from "./login-box";
import { isAuthenticated } from "js/api";
import "./page-title.css";

function PageTitle({ title, user, handleChangeUser }) {
  const pageTitleStyle = isAuthenticated() ? "col-md-6 col-md-offset-1" : "col-md-10 col-md-offset-1";
  return (
    <div className="row">
      <div className={`${pageTitleStyle} centered`}>
        <h1 className="page-title">{title}</h1>
      </div>
      {isAuthenticated() && <LoginBox user={user} handleChangeUser={handleChangeUser} />}
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string
};

export default PageTitle;

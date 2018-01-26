import * as React from "react";
import PropTypes from "prop-types";
import { Tab } from "react-bootstrap";
import { Route } from "react-router-dom";

const MenuItem = ({ title, eventKey, children }) => (
  <Tab title={title} eventKey={eventKey}>
    {children}
  </Tab>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  eventKey: PropTypes.number.isRequired,
  children: (props, propName, componentName) => {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, child => {
      if (child.type !== Route) {
        error = new Error("`" + componentName + "` children should be of type `Route`.");
      }
    });
    return error;
  }
};

export default MenuItem;

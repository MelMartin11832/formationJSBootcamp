import * as React from "react";
import { Tabs } from "react-bootstrap";
import { withRouter, matchPath } from "react-router-dom";

import MenuItem from "./menu-item";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    const { children } = props;
    this.handleSelect = this.handleSelect.bind(this);
    const { history } = this.props;
    const childrenArray = Array.isArray(children) ? children : [...children];
    this.allPaths = [];
    this.allPaths = childrenArray.map(c => {
      const routes = Array.isArray(c.props.children) ? c.props.children : [c.props.children];

      return routes.map(r => (r && r.props.path ? r.props.path : "/"));
    });

    this.paths = childrenArray.map(c => {
      const child = Array.isArray(c.props.children) ? c.props.children[0] : c.props.children;
      return child && child.props.path ? child.props.path : "/";
    });
    const currentIndex = this.getIndexPath(history.location.pathname);

    this.state = {
      indexOngletActif: currentIndex !== -1 ? currentIndex + 1 : 1
    };
  }

  getIndexPath(pathCourant) {
    let n = 0,
      find = 0;
    this.allPaths.forEach(paths => {
      paths.forEach(path => {
        if (matchPath(pathCourant, { path, exact: true, strict: false })) {
          find = n;
        }
      });

      n++;
    });

    return find;
  }

  handleSelect(index) {
    this.props.history.push(this.paths[index - 1]);
    this.setState({ indexOngletActif: index });
  }

  render() {
    return (
      <Tabs defaultActiveKey={this.state.indexOngletActif} id="menu-application" onSelect={this.handleSelect} justified>
        {this.props.children}
      </Tabs>
    );
  }
}

Menu.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, child => {
      if (child.type !== MenuItem) {
        error = new Error("`" + componentName + "` children should be of type `MenuItem`.");
      }
    });
    return error;
  }
};

export default withRouter(Menu);

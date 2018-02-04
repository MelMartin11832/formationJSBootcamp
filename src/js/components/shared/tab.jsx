import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";

class TabBootCamp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
    this.selectTab = tabIndex =>
      this.setState({
        activeTab: tabIndex
      });
  }

  render() {
    const { elements } = this.props;

    const tabs = elements.map((e, index) => {
      return (
        <Tab eventKey={index} title={e.title} key={index}>
          {e.body}
        </Tab>
      );
    });

    return (
      <div className="row">
        <ul className="nav nav-tabs nav-justified">
          <Tabs defaultActiveKey={0} id="informationToManage" onSelect={this.selectTab} justified>
            {tabs}
          </Tabs>
        </ul>
      </div>
    );
  }
}

TabBootCamp.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
    })
  )
};

export default TabBootCamp;

import * as React from "react";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchTemplate } from "js/store";

class TemplateOperationnel extends React.Component {
  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
    this.state = { template: null, from: null };
  }
  componentWillMount() {
    const id = this.props.match.params.id;
    if (id) {
      fetchTemplate(Number.parseInt(id, 10)).then(template => {
        this.setState({ template });
      });
    }
  }
  onBack() {
    const from = "/tableau-de-bord";
    // console.log(from);
    this.setState({ from });
  }
  render() {
    const { template, from } = this.state;

    if (from) {
      return <Redirect to={from} />;
    } else if (template) {
      const dateCreation = moment(template.dateCreation).format("L");
      return (
        <div className="template-operationnel">
          <div>id : {template.id}</div>
          <div>
            crée par {template.idepCreation} le {dateCreation}{" "}
          </div>
          <Button onClick={this.onBack}>retour</Button>
        </div>
      );
    } else return <div>waiting...</div>;
  }
}

export default TemplateOperationnel;

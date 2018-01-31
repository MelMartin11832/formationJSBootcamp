import * as React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Table } from "react-bootstrap";
import authenticated from "./../auth/authenticated-component";
import "./tableau-de-bord.css";

class TableauDeBord extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idTemplate: null };
  }
  componentWillMount() {
    this.props.chargerTemplatesOperations();
    this.handleClickTemplateOpe = this.handleClickTemplateOpe.bind(this);
  }

  handleClickTemplateOpe(idTemplate) {
    this.setState({ idTemplate });
  }

  render() {
    if (this.state.idTemplate) {
      return <Redirect to={`/template-operationnel/${this.state.idTemplate}`} />;
    }
    return (
      <div className="tableau-de-bord">
        <div className="left">
          <TableauTemplateOpe
            title="Mes templates opérations"
            rows={this.props.templates}
            handleClick={this.handleClickTemplateOpe}
          />
        </div>
        <div className="right">colonne left</div>
      </div>
    );
  }
}
/*
* hoc pour les table, avec un component pour les rows en param.
*/
const tableau = (Component: rowComponent) => ({ rows, title, handleClick }) => {
  const htmlRows = rows.map((row, i) => <Component key={i} row={row} handleClick={handleClick} />);
  return (
    <div className="tableau">
      <h3>{title}</h3>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>{htmlRows}</tbody>
      </Table>
    </div>
  );
};

/**
 * un composant tableau concrêt avec un style de ligne propre au template op
 */
const TableauTemplateOpe = tableau(({ row, handleClick }) => {
  const onClick = () => {
    handleClick(row.id);
  };
  return (
    <tr onClick={onClick}>
      <td>{row.id}</td>
      <td>{row.description}</td>
    </tr>
  );
});

TableauDeBord.propTypes = {
  templates: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  chargerTemplatesOperations: PropTypes.func.isRequired
};

export default authenticated(TableauDeBord);

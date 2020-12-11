import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
function Tables({ varients,headingFields,dataFields,dataFieldsKeys }) {
  return (
    <Table striped bordered hover variant={`${varients}`}>
      <thead>
        <tr>
        {headingFields.map((ele) => (
            <th>{ele}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {dataFields.map((element) => (
          <tr>
            {dataFieldsKeys.map((key) => (
              <td>{element[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

Tables.propTypes = {
  headingFields: PropTypes.array,
  dataFieldsKeys: PropTypes.array,
  dataFields: PropTypes.array,
  varients: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "dark",
  ]),
};
Tables.defaultProps = {
  varients: "primary",
  headingFields: ["Category", "SAP Material Code"],
  dataFieldsKeys: ["Category", "SAPMaterialCode"],
  dataFields: [
    { Category: "Category1", SAPMaterialCode: "SAP Material Code1" },
    { Category: "Category2", SAPMaterialCode: "SAP Material Code2" },
  ],
};
export default Tables;

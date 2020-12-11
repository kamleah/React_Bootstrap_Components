import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const DropDown = ({ DropDownMenuTitle, DropDownMenuData,varients }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant={`${varients}`} id="dropdown-basic">
        {DropDownMenuTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {DropDownMenuData.map((MenuData, index) => (
          <Dropdown.Item href={MenuData.MenuLink}>
            {MenuData.MenuTitle}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

DropDown.propTypes = {
  DropDownMenuTitle: PropTypes.string,
  DropDownMenuData: PropTypes.array,
  varients: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "dark"
  ]),
};
DropDown.defaultProps = {
  DropDownMenuTitle: "DropDown Menu",
  varients: "primary",
  DropDownMenuData: [
    {
      MenuTitle: "Menu 1",
      MenuLink: "/MenuLink1",
    },
    {
      MenuTitle: "Menu 2",
      MenuLink: "/MenuLink2",
    },
    {
      MenuTitle: "Menu 3",
      MenuLink: "/MenuLink3",
    }
  ],
};

export default DropDown;

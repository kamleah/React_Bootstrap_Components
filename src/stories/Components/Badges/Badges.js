import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";
const Badges = ({ backgroundColor, color, BadgeText }) => {
  return (
    <Badge style={{ backgroundColor: backgroundColor, color: color }}>
      {BadgeText}
    </Badge>
  );
};

Badges.propTypes = {
  BadgeText: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};
Badges.defaultProps = {
  BadgeText: "NEW",
  backgroundColor: "rgba(223,9,48,1)",
  color: "rgba(218,142,23,1)",
};

export default Badges;

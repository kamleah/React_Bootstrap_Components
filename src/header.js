import React from "react";
// import PropTypes from "prop-types";

function header(props) {
  const Change = (option) => {
    localStorage.setItem("lang", option.target.value);
    window.location.reload();
  };
  const lang = localStorage.getItem("lang") || "en";
  return (
    <div>
      <div className="dropdown">
        <select onChange={Change} value={lang}>
          <option value="en">English</option>
          <option value="de">Detuch</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
}

header.propTypes = {};

export default header;

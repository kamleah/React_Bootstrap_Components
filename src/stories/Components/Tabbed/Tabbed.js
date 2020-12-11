import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";

function Tabbed({
  defaultActiveKey,
  TabbedData,
  backgroundColor,
  color,
  borderColor,
}) {
  return (
    <Tabs
      defaultActiveKey={defaultActiveKey}
      id="uncontrolled-tab-example"
      style={borderColor && { borderColor }}
    >
      {TabbedData.map((data, index) => (
        <Tab
          eventKey={`${data.Tabtitle}`}
          title={`${data.Tabtitle}`}
          style={backgroundColor && { backgroundColor }}
        >
          <p className="px-4" style={color && { color }}>
            {data.TabData}
          </p>
        </Tab>
      ))}
    </Tabs>
  );
}

Tabbed.propTypes = {
  defaultActiveKey: PropTypes.string,
  TabbedData: PropTypes.array,
};
Tabbed.defaultProps = {
  defaultActiveKey: "Home",
  TabbedData: [
    {
      Tabtitle: "Home",
      TabData:
        "In ancient manuscripts, another means to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. For additional ornamentation, a hedera leaf or other symbol can be added to the inter-paragraph white space, or put in the indentation space.",
    },
    {
      Tabtitle: "Profile",
      TabData: "Hello Profile",
    },
    {
      Tabtitle: "Contact",
      TabData: "Hello Contact",
    },
    {
      Tabtitle: "Homes",
      TabData: "Hello Homes",
    },
    {
      Tabtitle: "Profiles",
      TabData: "Hello Profiles",
    },
    {
      Tabtitle: "Contacts",
      TabData: "Hello Contacts",
    },
  ],
};

export default Tabbed;

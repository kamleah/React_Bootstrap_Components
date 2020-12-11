import React from "react";
import DropDown from "./DropDown";

export default {
  title: "BootstrapComponents/DropDown",
  component: DropDown, 
};

const DropDownTemplates = (args) => <DropDown {...args} />;
export const ViewDropDown = DropDownTemplates.bind({});
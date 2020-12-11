import React from "react";
import Tables from "./Tables";

export default {
  title: "BootstrapComponents/Tables",
  component: Tables, 
};

const TablesTemplates = (args) => <Tables {...args} />;
export const ViewTables = TablesTemplates.bind({});
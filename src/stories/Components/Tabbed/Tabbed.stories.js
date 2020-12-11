import React from "react";
import Tabbed from "./Tabbed";

export default {
  title: "BootstrapComponents/Tabbed",
  component: Tabbed,
  argTypes: {
    backgroundColor: { control: "color" },    
    color: { control: "color" }, 
    borderColor:{control:"color"}   
  },
};

const TabbedTemplates = (args) => <Tabbed {...args} />;
export const ViewTabs = TabbedTemplates.bind({});

import React from "react";
import Jumbotrons from "./Jumbotrons";

export default {
  title: "BootstrapComponents/Jumbotrons",
  component: Jumbotrons,
  argTypes: {
    height: { control: "number" },
    width: { control: "number" },   
    backgroundColor:{control:"color"} ,
    JumbotronsHeadingColor:{control:"color"},
    JumbotronsTextColor:{control:"color"}
  },
};

const JumbotronsTemplates = (args) => <Jumbotrons {...args} />;
export const ViewJumbotrons = JumbotronsTemplates.bind({});

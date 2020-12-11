import React from "react";
import Navbars from "./Navbars";

export default {
  title: "BootstrapComponents/Navbars",
  component: Navbars,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const NavbarsTemplates = (args) => <Navbars {...args} />;
export const ViewNavbars = NavbarsTemplates.bind({});

import React from "react";
import HeaderBar from "./HeaderBar";

export default {
  title: "BootstrapComponents/HeaderBar",
  component: HeaderBar,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const HeaderBarTemplates = (args) => <HeaderBar {...args} />;
export const ViewNavbars = HeaderBarTemplates.bind({});

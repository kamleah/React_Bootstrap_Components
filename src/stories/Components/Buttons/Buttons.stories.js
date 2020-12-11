import React from "react";
import Buttons from "./Buttons";

export default {
  title: "BootstrapComponents/Buttons",
  component: Buttons,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const ButtonsTemplates = (args) => <Buttons {...args} />;
export const ViewButtons = ButtonsTemplates.bind({});

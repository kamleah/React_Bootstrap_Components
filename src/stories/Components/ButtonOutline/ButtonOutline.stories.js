import React from "react";
import ButtonOutline from "./ButtonOutline";

export default {
  title: "BootstrapComponents/ButtonOutline",
  component: ButtonOutline, 
  argTypes: { onClick: { action: 'clicked' } }, 
};

const ButtonOutlineTemplates = (args) => <ButtonOutline {...args} />;
export const ViewButtonOutline = ButtonOutlineTemplates.bind({});

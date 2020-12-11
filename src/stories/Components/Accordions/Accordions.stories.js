import React from "react";
import Accordions from "./Accordions";

export default {
  title: "BootstrapComponents/Accordions",
  component: Accordions,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    bodyColor: { control: "color" },
    bodyTextColor:{control:"color"},
    borderColor:{control:"color"}
  },
};

const AccordionsTemplates = (args) => <Accordions {...args} />;
export const ViewAccordions = AccordionsTemplates.bind({});

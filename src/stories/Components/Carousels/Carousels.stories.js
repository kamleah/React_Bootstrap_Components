import React from "react";
import Carousels from "./Carousels";

export default {
  title: "BootstrapComponents/Carousels",
  component: Carousels,
  argTypes: {
    height: { control: "number" },    
  },
};

const CarouselsTemplates = (args) => <Carousels {...args} />;
export const ViewCarousels = CarouselsTemplates.bind({});

import React from "react";
import CardCarousels from "./CardCarousels";

export default {
  title: "BootstrapComponents/CardCarousels",
  component: CardCarousels,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const CardCarouselsTemplates = (args) => <CardCarousels {...args} />;
export const ViewCardCarousels = CardCarouselsTemplates.bind({});

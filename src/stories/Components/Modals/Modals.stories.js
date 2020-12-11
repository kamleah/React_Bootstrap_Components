import React from "react";
import Modals from "./Modals";

export default {
  title: "BootstrapComponents/Modals",
  component: Modals,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const ModalsTemplates = (args) => <Modals {...args} />;
export const ViewModals = ModalsTemplates.bind({});

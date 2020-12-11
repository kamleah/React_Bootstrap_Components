import React from "react";
import Alerts from "./Alerts";

export default {
  title: "BootstrapComponents/Alerts",
  component: Alerts,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    
  },
};

const AlertsTemplates = (args) => <Alerts {...args} />;
export const ViewAlerts = AlertsTemplates.bind({});

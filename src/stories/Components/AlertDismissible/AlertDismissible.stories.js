import React from "react";
import AlertDismissible from "./AlertDismissible";

export default {
  title: "BootstrapComponents/AlertDismissible",
  component: AlertDismissible,
  argTypes: {
    backgroundColor: { control: "color" },
    ErrorHeadingcolor: { control: "color" },
    ErrorMessagecolor: { control: "color" },
  },
};

const AlertDismissibleTemplates = (args) => <AlertDismissible {...args} />;
export const ViewAlertDismissible = AlertDismissibleTemplates.bind({});

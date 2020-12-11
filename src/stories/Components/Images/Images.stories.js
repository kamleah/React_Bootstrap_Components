import React from "react";
import Images from "./Images";

export default {
  title: "BootstrapComponents/Images",
  component: Images,  
};

const ImagesTemplates = (args) => <Images {...args} />;
export const ViewImages = ImagesTemplates.bind({});

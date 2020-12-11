import React from "react";
import Cards from "./Cards";

export default {
  title: "BootstrapComponents/Cards",
  component: Cards,
  argTypes: {
    backgroundColor: { control: "color" },
    width:{control:"number"},
    ImageHeight:{control:"number"},
    CardTitleColor:{control:"color"},
    CardTextColor:{control:"color"}
  },
};

const CardsTemplates = (args) => <Cards {...args} />;
export const ViewCards = CardsTemplates.bind({});

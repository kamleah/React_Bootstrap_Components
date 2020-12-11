import React from 'react';

import  Badges  from './Badges';

export default {
  title: 'BootstrapComponents/Badges',
  component: Badges,
  argTypes: {
    backgroundColor: { control: 'color' },
    color:{control:"color"}
  },
};

const BadgesTemplate = (args) => <Badges {...args} />;

export const ViewBadges = BadgesTemplate.bind({});
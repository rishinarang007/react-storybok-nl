import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge } from './Badge'

// meta data
export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1906%3A3469',
    },
  },
} as ComponentMeta<typeof Badge>

// base template
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Confort Food',
}

export const DarkTheme = Template.bind({})
DarkTheme.parameters = {
  theme: 'dark',
}
DarkTheme.args = {
  text: 'Confort Food',
}

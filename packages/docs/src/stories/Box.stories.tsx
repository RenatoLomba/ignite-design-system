import { Box, BoxProps, Text } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    children: <Text>My Box</Text>,
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}

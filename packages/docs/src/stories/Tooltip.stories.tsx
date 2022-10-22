import {
  Box,
  Button,
  Heading,
  Tooltip,
  TooltipProps,
} from '@renato-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,

  args: {
    content: 'Tooltip content example',
    children: <Button>Hover</Button>,
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {
  decorators: [
    (story) => {
      return (
        <Box>
          <Heading css={{ marginBottom: '1rem' }}>
            Pass the mouse over the button
          </Heading>
          {story()}
        </Box>
      )
    },
  ],
}

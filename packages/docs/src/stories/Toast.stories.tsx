import { useState } from 'react'

import { Box, Button, Toast, ToastProps } from '@renato-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Toast',
  component: Toast,

  argTypes: {
    title: {
      type: 'string',
      control: false,
      description: 'The title appears on top of the toast container',
    },
    description: {
      type: 'string',
      control: false,
      description: 'The description appears on the body of the toast container',
    },
    open: {
      type: 'boolean',
      control: false,
      description: 'Controls when the toast shows up on screen',
    },
    setOpen: {
      type: 'function',
      control: false,
      description: 'Function to control the open state of the toast',
    },
  },

  decorators: [
    (story) => {
      const [open, setOpen] = useState(false)

      return (
        <Box>
          <Button onClick={() => setOpen(true)}>Show toast</Button>

          {story({
            args: {
              open,
              setOpen,
              title: 'Example title',
              description: 'Example description',
            },
          })}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}

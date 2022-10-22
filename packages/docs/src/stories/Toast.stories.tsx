import { Toast, ToastProps } from '@renato-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Toast',
  component: Toast,

  args: {
    open: true,
    title: 'Tooltip title!',
    description: 'Tooltip description...',
    variant: 'default',
  },

  argTypes: {
    variant: {
      options: ['default', 'success', 'warning', 'error', 'info'],
      control: {
        type: 'inline-radio',
      },
    },
    title: {
      type: 'string',
      description: 'The title appears on top of the toast container',
    },
    description: {
      type: 'string',
      description: 'The description appears on the body of the toast container',
    },
    open: {
      type: 'boolean',
      description: 'Controls when the toast shows up on screen',
    },
    setOpen: {
      type: 'function',
      description: 'Function to control the open state of the toast',
    },
  },
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
export const Success: StoryObj<ToastProps> = {
  args: {
    title: 'Success tooltip',
    variant: 'success',
  },
}
export const Warning: StoryObj<ToastProps> = {
  args: {
    title: 'Warning tooltip',
    variant: 'warning',
  },
}
export const Error: StoryObj<ToastProps> = {
  args: {
    title: 'Error tooltip',
    variant: 'error',
  },
}
export const Info: StoryObj<ToastProps> = {
  args: {
    title: 'Info tooltip',
    variant: 'info',
  },
}

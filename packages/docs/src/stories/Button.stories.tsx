import { ArrowRight } from 'phosphor-react'

import { Button, ButtonProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send',
  },
  argTypes: {
    variant: {
      name: 'variant',
      type: 'string',
      description: 'Button variant color',
    },
    size: {
      name: 'size',
      type: 'string',
      description: 'Button size',
    },
    disabled: {
      name: 'disabled',
      type: 'boolean',
      description: 'User cannot perform actions with this state',
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Contained: StoryObj<ButtonProps> = {
  args: {
    variant: 'contained',
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
    children: 'Create new',
  },
}

export const Alternative: StoryObj<ButtonProps> = {
  args: {
    variant: 'alternative',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight />
      </>
    ),
  },
}

export const ContainedDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const OutlinedDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    variant: 'outlined',
  },
}

export const AlternativeDisabled: StoryObj<ButtonProps> = {
  render: (props) => {
    return (
      <div
        style={{
          width: 'fit-content',
          background: '#fff',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button {...props} />
      </div>
    )
  },
  args: {
    disabled: true,
    variant: 'alternative',
  },
}

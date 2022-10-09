import { Heading, HeadingProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'My Heading',
  },
  argTypes: {
    weight: {
      description: 'Font weight of the Heading',
      type: 'string',
    },
    size: {
      description: 'Size of the Heading',
      type: 'string',
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Medium: StoryObj<HeadingProps> = {
  args: {
    weight: 'medium',
    children: 'Medium Heading',
  },
}

export const ExtraLarge: StoryObj<HeadingProps> = {
  name: 'Extra Large',
  args: {
    size: 'xl',
    as: 'h1',
    children: 'Extra Large Heading',
  },
}

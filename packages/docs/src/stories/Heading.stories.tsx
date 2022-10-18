import { Heading, HeadingProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    weight: 'bold',
    size: 'md',
    as: 'h2',
    children: 'My Heading',
  },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
      description: 'Tag to display the component',
    },
    weight: {
      options: ['regular', 'medium', 'bold'],
      control: {
        type: 'inline-radio',
      },
      description: 'Font weight of the Heading',
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
      description: 'Size of the Heading',
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

export const Regular: StoryObj<HeadingProps> = {
  args: {
    weight: 'regular',
    children: 'Regular Heading',
  },
}

export const Small: StoryObj<HeadingProps> = {
  name: 'Small',
  args: {
    size: 'sm',
    as: 'h6',
    children: 'Small Heading',
  },
}

export const Large: StoryObj<HeadingProps> = {
  name: 'Large',
  args: {
    size: 'lg',
    as: 'h2',
    children: 'Large Heading',
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

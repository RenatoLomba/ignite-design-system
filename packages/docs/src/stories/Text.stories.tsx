import { Text, TextProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    weight: 'regular',
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati eveniet doloremque sit sapiente earum, animi hic sed quia. A odio quidem incidunt officia veniam commodi quam autem non dicta corrupti?',
  },
  argTypes: {
    weight: {
      description: 'Font weight of the text',
      options: ['regular', 'medium', 'bold'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
      description: 'Size of the text',
      type: 'string',
    },
  },
} as Meta<TextProps>

export const Regular: StoryObj<TextProps> = {}

export const Medium: StoryObj<TextProps> = {
  args: {
    weight: 'medium',
  },
}

export const Bold: StoryObj<TextProps> = {
  args: {
    weight: 'bold',
  },
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}

export const ExtraLarge: StoryObj<TextProps> = {
  args: {
    size: 'xl',
  },
}

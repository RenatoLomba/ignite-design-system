import { Text, TextProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati eveniet doloremque sit sapiente earum, animi hic sed quia. A odio quidem incidunt officia veniam commodi quam autem non dicta corrupti?',
  },
  argTypes: {
    weight: {
      description: 'Font weight of the text',
      type: 'string',
    },
    size: {
      description: 'Size of the text',
      type: 'string',
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

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

export const ExtraLarge: StoryObj<TextProps> = {
  name: 'Extra Large',
  args: {
    size: 'xl',
  },
}

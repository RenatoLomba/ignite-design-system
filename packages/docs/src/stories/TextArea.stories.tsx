import { Box, Text, TextArea, TextAreaProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,

  argTypes: {
    placeholder: {
      name: 'placeholder',
      description: 'Text that appears when user did not typed anything',
      type: 'string',
    },
    disabled: {
      name: 'disabled',
      description: 'Prevents user from type anything on the input',
      type: 'boolean',
    },
  },

  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Text size="sm">Description</Text>

          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}

export const Placeholder: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Once upon a time...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

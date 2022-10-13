import { Box, Text, TextInput, TextInputProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,

  argTypes: {
    onChange: {
      action: 'change',
    },
    placeholder: {
      name: 'placeholder',
      description: 'Text that appears when user did not typed anything',
      type: 'string',
    },
    prefix: {
      name: 'prefix',
      description: 'Text that appears before the input text',
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
          <Text size="sm">Username</Text>

          {story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

export const Placeholder: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

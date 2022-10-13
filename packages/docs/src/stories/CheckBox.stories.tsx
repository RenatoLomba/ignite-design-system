import { Box, Text, CheckBox, CheckBoxProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,

  argTypes: {
    onCheckedChange: {
      action: 'change',
    },
    checked: {
      name: 'checked',
      description: 'Control the checkbox checked state',
      type: 'boolean',
    },
  },

  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          {story()}

          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}

export const Checked: StoryObj<CheckBoxProps> = {
  args: {
    checked: true,
  },
}

import { Box, MultiStep, MultiStepProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 1,
  },
  argTypes: {},

  decorators: [
    (story) => {
      return <Box>{story()}</Box>
    },
  ],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {}

export const Halfway: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 2,
  },
}

export const LastStep: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}

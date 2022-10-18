import { Avatar, AvatarProps, Box } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  argTypes: {
    src: {
      type: 'string',
      description: 'Image source uri',
    },
    alt: {
      type: 'string',
      description: 'Alternative text to show if image is not loaded',
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/RenatoLomba.png',
    alt: 'Renato Lomba',
  },
}

export const Fallback: StoryObj<AvatarProps> = {
  decorators: [
    (story) => {
      return <Box>{story()}</Box>
    },
  ],
  args: {
    alt: 'Renato Lomba',
  },
}

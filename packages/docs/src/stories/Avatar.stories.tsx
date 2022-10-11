import { Avatar, AvatarProps } from '@renato-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  argTypes: {
    src: {
      description: 'Image source uri',
    },
    alt: {
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
        <Avatar {...props} />
      </div>
    )
  },
  args: {
    alt: 'Renato Lomba',
  },
}

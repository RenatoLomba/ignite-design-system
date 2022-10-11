import { User } from 'phosphor-react'
import { FC } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { ComponentProps } from '@stitches/react'

import { styled } from '../styles'

const Container = styled(RadixAvatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})

const Image = styled(RadixAvatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const AvatarFallback = styled(RadixAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})

export type AvatarProps = ComponentProps<typeof Image>

export const Avatar: FC<AvatarProps> = ({ alt, ...props }) => {
  return (
    <Container>
      <Image {...props} alt={alt} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </Container>
  )
}

import { ElementType } from 'react'

import { ComponentProps } from '@stitches/react'

import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$short',
  margin: 0,
  padding: 0,
  color: '$gray100',

  variants: {
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    size: {
      sm: {
        fontSize: '$xl',
      },
      md: {
        fontSize: '$2xl',
      },
      lg: {
        fontSize: '$4xl',
      },
      xl: {
        fontSize: '$5xl',
      },
      '2xl': {
        fontSize: '$6xl',
      },
      '3xl': {
        fontSize: '$7xl',
      },
      '4xl': {
        fontSize: '$8xl',
      },
      '5xl': {
        fontSize: '$9xl',
      },
    },
  },

  defaultVariants: {
    weight: 'bold',
    size: 'md',
  },
})

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}

Heading.displayName = 'Heading'

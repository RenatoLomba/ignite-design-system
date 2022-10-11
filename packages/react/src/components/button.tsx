import { ElementType } from 'react'

import { ComponentProps } from '@stitches/react'

import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  cursor: 'pointer',
  border: '2px solid transparent',
  transition: 'background $short',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      contained: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },

        '&:focus': {
          outline: '2px solid $ignite500',
          outlineOffset: '2px',
        },
      },

      outlined: {
        color: '$ignite300',
        borderColor: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },

        '&:focus': {
          outline: '2px solid $ignite300',
          outlineOffset: '2px',
        },
      },

      alternative: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          backgroundColor: 'rgba(0,0,0,0.1)',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        padding: '$2 $4',
      },

      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    variant: 'contained',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}

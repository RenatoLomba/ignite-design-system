import { X } from 'phosphor-react'
import { Dispatch, FC } from 'react'

import * as RadixToast from '@radix-ui/react-toast'

import { keyframes, styled } from '../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const ToastContainer = styled(RadixToast.Root, {
  maxWidth: 360,
  borderRadius: 6,
  padding: '0.75rem 1.25rem',
  position: 'relative',

  variants: {
    variant: {
      default: {
        backgroundColor: '$gray800',
      },
      success: {
        backgroundColor: '$ignite500',
      },
      error: {
        backgroundColor: '$red700',
      },
      warning: {
        backgroundColor: '$orange700',
      },
      info: {
        backgroundColor: '$rocketseat500',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

const ToastTitle = styled(RadixToast.Title, {
  color: '$white',
  fontFamily: `'Roboto', sans-serif`,
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: 1.6,
})

const ToastDescription = styled(RadixToast.Description, {
  fontFamily: `'Roboto', sans-serif`,
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: 1.6,
  color: '$gray200',
  margin: 0,
  marginTop: 4,

  wordBreak: 'break-all',
  whiteSpace: 'normal',
  maxWidth: 'calc(360px - 2.5rem)',
})

const ToastAction = styled(RadixToast.Action, {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  color: '$gray200',
  cursor: 'pointer',
})

export type ToastProps = {
  open: boolean
  title: string
  description?: string
  setOpen: Dispatch<boolean>
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info' | undefined
}

export const Toast: FC<ToastProps> = ({
  setOpen,
  open,
  title,
  description,
  variant,
}) => {
  return (
    <RadixToast.Provider swipeDirection="right">
      <ToastContainer variant={variant} open={open} onOpenChange={setOpen}>
        {title && <ToastTitle>{title}</ToastTitle>}

        {description && (
          <ToastDescription asChild>
            <p>{description}</p>
          </ToastDescription>
        )}

        <ToastAction asChild altText="Close toast">
          <X width={20} height={20} />
        </ToastAction>
      </ToastContainer>

      <ToastViewport />
    </RadixToast.Provider>
  )
}

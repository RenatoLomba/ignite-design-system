import { FC, ReactNode } from 'react'

import * as RadixTooltip from '@radix-ui/react-tooltip'

import { keyframes, styled } from '../styles'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const StyledContent = styled(RadixTooltip.Content, {
  borderRadius: 5,
  padding: '0.75rem 1rem',
  backgroundColor: '$gray900',
  fontSize: '$md',
  fontFamily: `'Roboto', sans-serif`,
  fontWeight: 500,
  lineHeight: 1.4,
  color: '$gray100',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

const StyledArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
})

function TooltipContent({
  children,
  ...props
}: RadixTooltip.TooltipContentProps) {
  return (
    <RadixTooltip.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </RadixTooltip.Portal>
  )
}

export type TooltipProps = {
  content: string
  children: ReactNode
}

export const Tooltip: FC<TooltipProps> = ({ children, content }) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <TooltipContent sideOffset={5}>{content}</TooltipContent>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

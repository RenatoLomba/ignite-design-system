import { FC } from 'react'

import { styled } from '../styles'
import { Text } from './text'

const MultiStepContainer = styled('div', {})

const Label = styled(Text, {
  color: '$gray200',
})

const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',

  gridTemplateColumns: `repeat(var(--steps-size), 1fr)`,
})

const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  width: '100%',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})

export type MultiStepProps = {
  size: number
  currentStep?: number
}

export const MultiStep: FC<MultiStepProps> = ({ size, currentStep = 1 }) => {
  return (
    <MultiStepContainer>
      <Label size="xs">
        Passo {currentStep} de {size}
      </Label>

      <Steps
        css={{
          '--steps-size': size,
        }}
      >
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

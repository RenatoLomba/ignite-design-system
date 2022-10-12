import { ComponentProps, FC } from 'react'

import { styled } from '../styles'

const Container = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

const Input = styled('input', {
  cursor: 'inherit',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export const TextInput: FC<TextInputProps> = ({ prefix, ...props }) => {
  return (
    <Container>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </Container>
  )
}

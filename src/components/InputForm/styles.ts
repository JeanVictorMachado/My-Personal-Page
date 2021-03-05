import styled, { css } from 'styled-components'

import { InputFormProps } from '.'
import theme from '../../styles/theme'

type InputProps = {
  widthInput: string
} & Pick<InputFormProps, 'type' | 'placeholder'>

export const Input = styled.input<InputProps>`
  ${({ theme, widthInput }: any) => css`
    width: ${widthInput};
    height: 3.8rem;
    padding-left: 1rem;
    margin-bottom: 2rem;

    background: #E8E8E8;

    border: none;
    border-radius: 3px;

    font-size: 1.5rem;

    @media (max-width: 950px) {
      width: 100%;
    }
  `}
`

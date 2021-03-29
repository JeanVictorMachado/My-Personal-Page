import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    padding-bottom: 4rem;

    background: #000009;

    > span {
      font-size: 1.5rem;
      color: #7F7F7F;
    }
  `}
`

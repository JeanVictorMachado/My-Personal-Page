import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    background-color: ${theme.colors.black};
  `}
`

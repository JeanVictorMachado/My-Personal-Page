import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1200px;
    /* height: 100vh; */
    margin: 0 auto;
    background-color: ${theme.colors.black};
  `}
`

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    background-color: ${theme.colors.black};
  `}
`

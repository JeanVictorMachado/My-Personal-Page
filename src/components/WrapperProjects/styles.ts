import styled, { css } from 'styled-components'

type WrapperProps = {
  menuIsOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, menuIsOpen }) => css`
    width: 100%;
    height: 415px;
    padding: 0 2rem 2rem 2rem;

    @media (max-width: 1000px) {
      height: 380px;
    }

    @media (max-width: 750px) {
      height: 600px;
    }

    > h2 {
      color: ${theme.colors.white};
      font-size: 2rem;
      /* position: ${menuIsOpen ? 'none' : 'relative'}; */
      position: relative;

      &::after {
        /* position: ${menuIsOpen ? 'none' : 'absolute'}; */
        position: absolute;
        left: 0;
        bottom: -0.8rem;
        content: '';
        width: 5rem;
        border-bottom: 0.4rem solid ${theme.colors.primary};
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 2.5rem;

    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    padding: 1rem;
  `}
`

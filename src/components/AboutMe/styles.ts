import styled, { css } from 'styled-components'

type ContentProps = {
  menuIsOpen: boolean
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
`

export const Content = styled.div<ContentProps>`
  ${({ theme, menuIsOpen }) => css`
    width: 100%;
    height: 100%;
    /* border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    padding: 1rem; */

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

    > p {
      margin-top: 20px;
      color: ${theme.colors.white};
      font-size: 1.8rem;
      text-align: justify;
      line-height: 2.8rem;

      @media (max-width: 1000px) {
        font-size: 1.6rem;
        line-height: 2.45rem;
      }
    }
  `}
`

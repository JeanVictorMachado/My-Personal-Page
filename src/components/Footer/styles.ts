import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem 0 4rem 0;


    margin-top: 3rem;
    border-top: 2px solid ${theme.colors.darkGray};

    background: #000009;

    display: flex;
    justify-content: center;

    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
    }
  `}
`

export const WrapperLeft = styled.div`
  ${({ theme }) => css`
    margin-right: 0;

    /* background: red; */

    display: flex;

    > div {
      display: flex;
      flex-direction: column;

      margin-right: 130px;
      margin-left: 2rem;

      @media (max-width: 1000px) {
        margin-right: 90px;
      }

      @media (max-width: 850px) {
      align-items: center;

      margin-right: 3rem;
      margin-left: 4rem;
      margin-bottom: 3rem;
    }

      > span {
        color: ${theme.colors.primary};

        font-size: 2rem;

        @media (max-width: 400px) {
          font-size: 1.6rem;
        }
      }

      > a {
        color: ${theme.colors.gray};
        text-decoration: none;

        font-size: 2rem;

        opacity: 0.8;

        @media (max-width: 400px) {
          font-size: 1.6rem;
        }

        &:hover {
          opacity: 1;
          transition: opacity 0.2s;
        }
      }
    }
  `}
`

export const WrapperRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* background: blue; */

    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    div {

      > span {
        color: ${theme.colors.gray};
        margin-right: 2rem;

        font-size: 2rem;

        @media (max-width: 850px) {
          margin-right: 0;
        }

        @media (max-width: 400px) {
          font-size: 1.8rem;
        }
      }
    }
  `}
`

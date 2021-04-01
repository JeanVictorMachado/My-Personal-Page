import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 2rem;

    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
      color: ${theme.colors.white};
      font-size: 4rem;
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    /* border: 1px solid white; */
    padding: 2rem 15rem 0 15rem;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 950px) {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 750px) {
      padding: 2rem 10rem 0 10rem;
    }

    @media (max-width: 600px) {
      padding: 2rem 0 0 0;
    }

    > textarea {
      width: 69%;
      height: 3.8rem;

      border: none;
      border-radius: 3px;

      padding-left: 1rem;
      padding-top: 0.6rem;
      font-size: 1.5rem;

      background: #EDEDED;

      @media (max-width: 950px) {
        width: 100%;
        margin-bottom: 2rem;
      }
    }

    > button {
      width: 29%;
      height: 3.8rem;

      font-size: 1.5rem;
      font-weight: 600;

      border: none;
      border-radius: 3px;

      background: ${theme.colors.primary};
      color: ${theme.colors.white};

      opacity: 1;

      &:hover {
        opacity: 0.8;
        transition: opacity 0.3s;
      }

      @media (max-width: 950px) {
        width: 100%;
      }

      @media (max-width:px) {
        width: 100%;
      }
    }
  `}
`

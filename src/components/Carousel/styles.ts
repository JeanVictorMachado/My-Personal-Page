import styled, { css } from 'styled-components'

type ContentProps = {
  menuIsOpen: boolean
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 2rem;
  padding-bottom: 3rem;

  display: flex;
  justify-content: center;

  @media (max-width: 750px) {
    align-items: center;
    flex-direction: column;
  }
`

export const ImgProject = styled.img`
  width: 380px;
  margin-right: 8rem;

  @media (max-width: 1000px) {
    width: 340px;
    margin-right: 6rem;
  }

  @media (max-width: 750px) {
    width: 250px;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`

export const WrapperInfos = styled.div`
  ${({ theme }) => css`
    width: 300px;

    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > h2 {
      color: ${theme.colors.white};
      font-size: 2.2rem;
      margin-bottom: 2.5rem;

      @media (max-width: 1000px) {
        margin-bottom: 2rem;
      }
    }

    a {
      color: ${theme.colors.white};
      font-size: 1.2rem;
      border: 1px solid ${theme.colors.primary};
      border-radius: 5px;
      padding: 0.5rem;
      margin-right: 1rem;
      font-weight: 600;
    }

    > p {
      color: ${theme.colors.white};
      font-size: 1.6rem;
      margin-top: 2.5rem;
      text-align: justify;

      @media (max-width: 1000px) {
        font-size: 1.5rem;
        margin-top: 2rem;
      }
    }

    > section {
      width: 100%;
      margin-top: 1.5rem;

      > span {
        color: ${theme.colors.white};
        font-size: 1.6rem;
        font-weight: 600;
      }

      > div {
        width: 100%;
        margin-top: 1rem;

        @media (max-width: 1000px) {
          margin-top: 0.5rem;
        }

        @media (max-width: 750px) {
          display: flex;
          justify-content: center;
        }

        display: flex;
        align-items: center;

        .img1 {
          width: 50px;
          height: 50px;
          margin-right: 1rem;

          @media (max-width: 1000px) {
            width: 40px;
            height: 40px;
          }
        }
        .img2 {
          width: 60px;
          margin-right: 1rem;

          @media (max-width: 1000px) {
            width: 50px;
            height: 50px;
          }
        }
        .img3 {
          width: 50px;
          height: 50px;
          margin-right: 1rem;

          @media (max-width: 1000px) {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  `}
`

import styled, { css } from 'styled-components'

type WrapperProps = {
  menuIsOpen: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ menuIsOpen }) => css`
    display: flex;
    justify-content: center;
    position: ${menuIsOpen ? 'none' : 'relative'};
  `}

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

export const WrapperLeft = styled.div`
  ${({ theme }) => css`
    width: 320px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-right: 10%;

    @media (max-width: 1000px) {
      width: 266px;
      margin-top: 2rem;
      margin-right: 10%;
    }

    @media (max-width: 700px) {
      margin-right: 0;
    }

    > h2 {
      font-size: 3rem;
      color: ${theme.colors.primary};
      margin: 0;

      @media (max-width: 1000px) {
        font-size: 2.5rem;
      }
    }

    > p {
      color: ${theme.colors.white};
      font-size: 2.3rem;
      margin: 0;
      margin-bottom: 1rem;

      @media (max-width: 1000px) {
        margin-bottom: 0.5rem;
        font-size: 1.8rem;
      }

      @media (max-width: 700px) {
      }
    }

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .img1 {
        width: 62px;

        @media (max-width: 1000px) {
          width: 52px;
        }
      }
      .img2 {
        width: 78px;

        @media (max-width: 1000px) {
          width: 67px;
        }
      }
      .img3 {
        width: 60px;

        @media (max-width: 1000px) {
          width: 50px;
        }
      }
    }
  `}
`

export const ContentQuote = styled.section`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primary};
    border-radius: 3px;
    padding: 10px;

    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
      margin-top: 1rem;
    }

    .quote {
      color: gray;
      font-size: 1.6rem;
      text-align: justify;
      margin-bottom: 10px;

      @media (max-width: 1000px) {
        font-size: 1.4rem;
        margin-bottom: 5px;
      }
    }

    .create-quote {
      color: ${theme.colors.lightGray};
      font-size: 1.6rem;
    }
  `}
`

export const WrapperRight = styled.div`
  margin-top: 3rem;

  @media (max-width: 700px) {
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
    > img {
      width: 20rem;
    }
  }

  @media (max-width: 750px) {
    > img {
      margin-top: 0rem;
    }
  }
`

export const WrapperEfect = styled.div<WrapperProps>`
  /* ${({ menuIsOpen }) => css`
    display: ${menuIsOpen ? 'none' : 'flex'};
  `} */

  width: 100%;
  height: 60px;
  background-image: linear-gradient(transparent 0%, #000011bb, #000011);

  position: absolute;
  bottom: 0;

  @media (max-width: 1000px) {
    height: 40px;
  }
`

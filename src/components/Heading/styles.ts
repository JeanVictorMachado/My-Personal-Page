import styled, { css, keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .4;
  }
  100% {
    transform: translatex(0);
    opacity: 1;
  }
`

export const Wrapper = styled.header`
  height: 5rem;
  padding: 0 2rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
  }
`

export const Logo = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 22px;
    margin-top: 1.3rem;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    > span {
      color: ${theme.colors.primary};
    }
  `}
`

export const Navigation = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`

export const Link = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin-left: 2rem;
    color: ${theme.colors.white};
    font-size: 1.6rem;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.white};
      text-decoration: none;

      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.3s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const ImgOpenOrClose = styled.img`
  display: none;

  @media (max-width: 1000px) {
    ${({ theme }) => css`
      display: block;
      width: 20px;
      color: ${theme.colors.white};

      cursor: pointer;
    `}
  }
`

export const NavigationMobile = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;

      width: 50%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100vh;
      overflow: hidden;
      position: fixed;

      background: ${theme.colors.secondary}ee;

      z-index: 999;

      animation: ${animate} 0.5s;

      > img {
        width: 20px;
        margin-left: 10px;
        margin-top: 10px;
        cursor: pointer;
      }
    }

    @media (max-width: 750px) {
      flex-direction: column;
      width: 80%;
      margin-left: 0;
    }
  `}
`

export const ContainerToggle = styled.div`
  ${() => css`

    display: flex;
    align-items: center;

    > img {
      width: 12px;
      height: 12px;
      margin-left: 3px;

    }

    > div {
      margin-left: 3px;
    }
  `}
`;

export const ContainerLinks = styled.div`
${({ theme }) => css`
    flex: 1;

    width: 100%;
    margin-top: 75px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      width: 100%;
      height: 50px;
      margin-bottom: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      > a {
        margin: 0;
        font-size: 2rem;
        font-weight: 600;
        color: ${theme.colors.mainBg};
      }

      transition: background 0.4s;

      &:hover {
        background: ${theme.colors.mainBg}cc;

        > a {
          color: ${theme.colors.white};
        }
      }
    }
  `}
`

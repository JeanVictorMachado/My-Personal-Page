import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.black};
      font-family: ${theme.font.family};
    `}
  }
`

export default GlobalStyles

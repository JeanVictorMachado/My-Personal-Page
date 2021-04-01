import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

import { ThemeProvider } from 'styled-components'

import { GlobalProvider } from '../contexts/GlobalContext'

import { AppProps } from 'next/app'
import Head from 'next/head'
import dark from '../styles/themeDark';

import GlobalStyles from '../styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { stateTheme } = useContext(GlobalContext)

  return (
    <GlobalProvider>
        <Head>
          <title>My Personal Page</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Syled Components"
          />
        </Head>
        <ThemeProvider theme={ stateTheme || dark }>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
    </GlobalProvider>
  )
}

export default App

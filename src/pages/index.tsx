import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

import * as S from '../styles/stylesPages/HomePage'

import { ThemeProvider } from 'styled-components'

import Heading from '../components/Heading'
import WrapperMyImage from '../components/WrapperMyImage'
import AboutMe from '../components/AboutMe'
import WrapperProjects from '../components/WrapperProjects'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

export default function Home() {
  const { stateTheme, menuIsOpen } = useContext(GlobalContext)

  return (
    <ThemeProvider theme={ stateTheme }>
      <S.MainWrapper>
        <S.Wrapper>
          <Heading />
          <WrapperMyImage />
          <AboutMe />
          <WrapperProjects />
          <ContactMe />
        </S.Wrapper>
        <Footer />
        <Copyright />
      </S.MainWrapper>
    </ThemeProvider>
  )
}

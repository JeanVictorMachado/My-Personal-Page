import * as S from '../styles/stylesPages/HomePage'

import { GlobalProvider } from '../contexts/GlobalContext'

import Heading from '../components/Heading'
import WrapperMyImage from '../components/WrapperMyImage'
import AboutMe from '../components/AboutMe'
import WrapperProjects from '../components/WrapperProjects'
import ContactMe from '../components/ContactMe'

export default function Home() {
  return (
    <GlobalProvider>
      <S.Wrapper>
        <Heading />
        <WrapperMyImage />
        <AboutMe />
        <WrapperProjects />
        <ContactMe />
      </S.Wrapper>
    </GlobalProvider>
  )
}

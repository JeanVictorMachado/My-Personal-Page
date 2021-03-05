import * as S from '../styles/stylesPages/HomePage'

import { GlobalProvider } from '../contexts/GlobalContext'

import Heading from '../components/Heading'
import WrapperMyImage from '../components/WrapperMyImage'
import AboutMe from '../components/AboutMe'
import WrapperProjects from '../components/WrapperProjects'

export default function Home() {
  return (
    <GlobalProvider>
      <S.Wrapper>
        <Heading />
        <WrapperMyImage />
        <AboutMe />
        <WrapperProjects />
      </S.Wrapper>
    </GlobalProvider>
  )
}

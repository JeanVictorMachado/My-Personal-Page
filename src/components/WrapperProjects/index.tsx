import 'bootstrap/dist/css/bootstrap.min.css'

import { GlobalContext } from '../../contexts/GlobalContext'
import { useContext } from 'react'

import * as S from './styles'
import Example from '../../components/Carousel'

const WrapperProjects = () => {
  const { menuIsOpen } = useContext(GlobalContext)

  return (
    <S.Wrapper menuIsOpen={menuIsOpen}>
      <h2>PROJETOS</h2>

      <S.Content>
        <Example />
      </S.Content>
    </S.Wrapper>
  )
}

export default WrapperProjects

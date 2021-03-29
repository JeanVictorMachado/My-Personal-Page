import { GlobalContext } from '../../contexts/GlobalContext'
import { useContext } from 'react'

import * as S from './styles'

const AboutMe = () => {
  const { menuIsOpen } = useContext(GlobalContext)

  return (
    <S.Wrapper>
      <S.Content menuIsOpen={menuIsOpen}>
        <h2>QUEM SOU</h2>
        <p>
          Muito prazer, sou Jean Victor Machado,
          estudante de Desenvolvimento de Software na Trybe,
          formado em Arquitetura e Urbanismo,
          desde criança sou apaixonado em tecnologia e em
          desenvolver soluções para projetos arquitetônicos,
          hoje me sinto muito feliz e realizado por poder unir
          essas duas coisas que amo na criação de softwares e
          impactar pessoal.
        </p>
      </S.Content>
    </S.Wrapper>
  )
}

export default AboutMe

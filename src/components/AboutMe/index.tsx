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
          Sou Jean Machado, desenvolvedor de software full stack. Especialista
          em Aplicativos e Games com mais de 10 anos de experiência em mídias
          interativas. Possuo experiência com equipes multinacionais, além de
          certificação compatível e 4 prêmios de reconhecimento nacional junto à
          Funbites. Adoro desafios e acredito na transformação do mundo com o
          poder da informação.
        </p>
      </S.Content>
    </S.Wrapper>
  )
}

export default AboutMe

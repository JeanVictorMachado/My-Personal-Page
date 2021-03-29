import { useState, useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

import * as S from './styles'

const Heading = () => {
  const { setMenuIsOpen } = useContext(GlobalContext)

  const [isActive, setIsActive] = useState(false)

  const handleMenuIsOpen = (trueOrFalse: boolean) => {
    setIsActive(trueOrFalse)
    setMenuIsOpen(trueOrFalse)
  }

  return (
    <S.Wrapper>
      <S.Logo>
        {`< J`} <span>{`M`}</span> {`/ >`}
      </S.Logo>

      <S.Navigation>
        <S.Link href="#">Sobre mim</S.Link>
        <S.Link href="#">Projetos</S.Link>
        <S.Link href="#">Contacte-me</S.Link>
      </S.Navigation>

      {!isActive && (
        <S.ImgOpenOrClose
          src="img/cardapio.png"
          alt="Open"
          onClick={() => handleMenuIsOpen(true)}
        />
      )}

      {isActive && (
        <S.NavigationMobile>
          <img
            src="img/close.png"
            alt="Close"
            onClick={() => handleMenuIsOpen(false)}
          />

          <div>
            <S.Link href="#">Sobre mim</S.Link>
            <S.Link href="#">Projetos</S.Link>
            <S.Link href="#">Contacte-me</S.Link>
          </div>
        </S.NavigationMobile>
      )}
    </S.Wrapper>
  )
}

export default Heading

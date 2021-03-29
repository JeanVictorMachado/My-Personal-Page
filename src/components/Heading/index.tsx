import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

import Toggle from '../Toggle'

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

      <S.ContainerToggle>
        <img src="/img/sunWhite.png" alt="Sun" />
        <div>
          <Toggle />
        </div>
        <img src="/img/moonWhite.png" alt="Sun" />
      </S.ContainerToggle>

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

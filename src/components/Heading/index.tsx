import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

import dark from '../../styles/themeDark';
import light from '../../styles/themeLight';
import Toggle from '../Toggle'

import * as S from './styles'

const Heading = () => {
  const { setMenuIsOpen } = useContext(GlobalContext)
  const [isActive, setIsActive] = useState(false)
  const [isTheme, setIsTheme] = useState(false)

  const { setStateTheme } = useContext(GlobalContext)

  useEffect(() => {
    if (isTheme) {
      setStateTheme(light)
      localStorage.setItem('@themePortifolio', JSON.stringify(light))
    } else {
      setStateTheme(dark)
      localStorage.setItem('@themePortifolio', JSON.stringify(dark))
    }
  }, [isTheme])

  const handleMenuIsOpen = (trueOrFalse: boolean) => {
    setIsActive(trueOrFalse)
    setMenuIsOpen(trueOrFalse)
  }

  const exitSideBar = () => {
    setIsActive(false)
    setMenuIsOpen(false)
  }

  return (
    <S.Wrapper>
      {/* <S.Logo>
        {`< J`} <span>{`M`}</span> {`/ >`}
      </S.Logo> */}

      <S.Navigation>
        <S.Link href="#">Sobre mim</S.Link>
        <S.Link href="#">Projetos</S.Link>
        <S.Link href="#">Contacte-me</S.Link>
      </S.Navigation>

      {!isActive && (
        <S.ImgOpenOrClose
          src={isTheme ? "img/cardapioBlack.png" : "img/cardapio.png"}
          alt="Open"
          onClick={() => handleMenuIsOpen(true)}
        />
      )}

      <S.ContainerToggle>
        {isTheme
          ? <img src="/img/sun.png" alt="Sun" />
          : <img src="/img/sunWhite.png" alt="Sun" />}
        <div>
          <Toggle
            checked={ isTheme }
            onChange={ () => setIsTheme(!isTheme) }
          />
        </div>
        {isTheme
          ? <img src="/img/moon.png" alt="Sun" />
          : <img src="/img/moonWhite.png" alt="Sun" />}
      </S.ContainerToggle>

      {isActive && (
        <S.NavigationMobile>
          <img
            src="img/close.svg"
            alt="Close"
            onClick={() => handleMenuIsOpen(false)}
          />

          <S.ContainerLinks>
            <div>
              <S.Link
                href="#about-me"
                onClick={ exitSideBar }
              >
                Sobre mim
              </S.Link>
            </div>
            <div>
              <S.Link
                href="#projects"
                onClick={ exitSideBar }
              >
                  Projetos
              </S.Link>
            </div>
            <div>
              <S.Link
                href="#contact-me"
                onClick={ exitSideBar }
              >
                Contacte-me
              </S.Link>
            </div>
            <div>
              <S.Link href="https://www.linkedin.com/in/jean-machado-full-stack/">
                Linkedin
              </S.Link>
            </div>
            <div>
              <S.Link href="https://github.com/JeanVictorMachado">Github</S.Link>
            </div>
          </S.ContainerLinks>
        </S.NavigationMobile>
      )}
    </S.Wrapper>
  )
}

export default Heading

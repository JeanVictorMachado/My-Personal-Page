import { GlobalContext } from '../../contexts/GlobalContext'
import { useContext } from 'react'

import CarouselInitial from '../CarouselInitial'

import * as S from './styles'

const WrapperMyImage = () => {
  const { menuIsOpen } = useContext(GlobalContext)

  const data = [
    {
      img1: 'img/icon-reactjs.png',
      img2: 'img/icon-nodejs2.webp',
      img3: 'img/icon-mongodb.png',
    },
    {
      img3: 'img/icon-mongodb.png',
      img2: 'img/icon-nodejs2.webp',
      img1: 'img/icon-reactjs.png',
    },
    {
      img3: 'img/icon-mongodb.png',
      img2: 'img/icon-nodejs2.webp',
      img1: 'img/icon-reactjs.png',
    }
  ]

  return (
    <S.Wrapper menuIsOpen={menuIsOpen}>
      <S.WrapperLeft>
        <h2>Olá, sou Jean Machado</h2>
        <p>Desenvolvedor Full-Stack</p>
        <div>

          <CarouselInitial data={ data } />

        </div>
        <S.ContentQuote>
          <span className="quote">
            ” A arte de programar consiste em organizar e dominar a
            complexidade. “
          </span>
          <span className="create-quote">Edsger W. Dijkstra</span>
        </S.ContentQuote>
      </S.WrapperLeft>

      <S.WrapperRight>
        <img src="img/homem-que-sorri-com-os-bracos-cruzados.png" />
      </S.WrapperRight>

      <S.WrapperEfect menuIsOpen={menuIsOpen}></S.WrapperEfect>
    </S.Wrapper>
  )
}

export default WrapperMyImage

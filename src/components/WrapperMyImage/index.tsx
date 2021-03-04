import { GlobalContext } from '../../contexts/GlobalContext'
import { useContext } from 'react'

import * as S from './styles'

const WrapperMyImage = () => {
  const { menuIsOpen } = useContext(GlobalContext)

  return (
    <S.Wrapper menuIsOpen={menuIsOpen}>
      <S.WrapperLeft>
        <h2>Olá, sou Jean Machado</h2>
        <p>Desenvolvedor Full-Stack</p>
        <div>
          <img className="img1" src="img/icon-reactjs.png" alt="" />
          <img className="img2" src="img/icon-nodejs2.webp" alt="" />
          <img className="img3" src="img/icon-mongodb.png" alt="" />
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

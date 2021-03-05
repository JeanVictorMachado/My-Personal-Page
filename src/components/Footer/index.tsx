import * as S from './styles'

const Footer = () => {

  return (
    <S.Wrapper>
      <S.WrapperLeft>
        <div>
          <span>MENU</span>
          <a href="#">Home</a>
          <a href="#">Quem sou</a>
          <a href="#">Portifólio</a>
          <a href="#">Contato</a>
        </div>
        <div>
        <span>REDES SOCIAIS</span>
          <a href="#">Linkedin</a>
          <a href="#">Github</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </S.WrapperLeft>

      <S.WrapperRight>
        <div>
          <span>WHATSAPP:</span>
          <span>43 996646913</span>
        </div>
        <div>
          <span>EMAIL:</span>
          <span>jeanvictor_arq@gmail.com</span>
        </div>
      </S.WrapperRight>
    </S.Wrapper>
  )
}

export default Footer

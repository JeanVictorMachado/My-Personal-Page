import * as S from './styles'

import InputForm from '../InputForm'

const AboutMe = () => {

  return (
    <S.Wrapper>
      <h1 id="contact-me">Fale Comigo</h1>
      <S.Form >
        <InputForm
          type={"text"}
          placeholder={"Nome:"}
          widthInput={"49%"}
        />
        <InputForm
          type={"email"}
          placeholder={"Email:"}
          widthInput={"49%"}
        />
        <InputForm
          type={"tel"}
          placeholder={"Tel: (ddd) 12345-1234"}
          pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
          widthInput={"29%"}
        />
        <InputForm
          type={"text"}
          placeholder={"Assunto:"}
          widthInput={"69%"}
        />

        <textarea placeholder="Menssagem:" required />
        <button type="submit">Enviar contato</button>
      </S.Form>
    </S.Wrapper>
  )
}

export default AboutMe

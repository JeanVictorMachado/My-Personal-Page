import * as S from './styles'

export type InputFormProps = {
  type: string
  placeholder?: string
  widthInput?: string
  pattern?: string
}

const InputForm = ({ type, placeholder, widthInput, pattern, ...props }: InputFormProps) => {

  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      widthInput={widthInput}
      pattern={pattern}
      required
      {...props}
    />
  )
}

export default InputForm

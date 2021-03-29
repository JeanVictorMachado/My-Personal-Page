import React from 'react';

import { Container, ToggleLabel, ToggleSwitch } from './styles';

type ToggleProps = {
  labelLeft: String
  labelRight: String
  checked: any
  onChange: () => void
}

const Toggle = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}: ToggleProps) => (
  <Container>
    <ToggleLabel>{labelLeft}</ToggleLabel>
    <ToggleSwitch
      checked={ checked }
      uncheckedIcon={ false }
      checkedIcon={ false }
      onChange={ onChange }
    />
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
);

export default Toggle;

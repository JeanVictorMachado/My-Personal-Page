import styled from 'styled-components';

import Switch from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export const ToggleSwitch = styled(Switch).attrs(
  ({ theme }) => ({
    onColor: theme.colors.primary,
    offColor: theme.colors.primary,
    width: 30,
    height: 15,
  }),
)`
  `;

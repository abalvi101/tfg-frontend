import styled from "styled-components";
import { Button as UnstyledButton } from "./Button";

const Button = styled(UnstyledButton)`
  background-color: ${props => props.secondary ? props.theme.primaryLight : props.danger ? props.theme.error : props.theme.primary};
  color: ${props => props.danger ? '#fff' : 'inital'};
  font-family: Sora;
  border: none;
  border-radius: 4px;
  padding: 8px 24px;
  font-size: 12px;
  cursor: pointer;
`

export default Button;
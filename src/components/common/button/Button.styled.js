import styled from "styled-components";
import { Button as UnstyledButton } from "./Button";

const Button = styled(UnstyledButton)`
  background-color: ${props => props.secondary ? props.theme.primaryLight : props.danger ? props.theme.error : props.theme.primary};
  color: ${props => props.danger ? '#fff' : 'inital'};
  font-family: Sora;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`

export default Button;
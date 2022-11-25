import styled from "styled-components";
import Button from "../../common/button";
import { Register as UnstyledRegister } from "./Register";

const Register = styled(UnstyledRegister)`
  width: 100%;
  max-width: 426px;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  
  legend h1 {
    margin: 0;
    text-align: center;
  }

  .switch_label {
    display: flex;
    gap: 1rem;
    align-items: 'flex-end';
  }

  .switch_label > span {
    transition: 0.3s;
  }

  .switch_label > .nonSelected {
    color: #999;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  footer a {
    text-decoration: none;
    color: ${props => props.theme.secondaryFont};
    /* font-family: Sora;
    font-size: 0.8rem; */
  }
  footer ${Button} {
    /* color: ${props => props.theme.background}; */
  }
`

export default Register;
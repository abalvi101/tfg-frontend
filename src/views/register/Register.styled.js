import styled from "styled-components";
import Button from "../../components/common/button";
import { Register as UnstyledRegister } from "./Register";

const Register = styled(UnstyledRegister)`
  display: flex;
  flex-wrap: nowrap;
  min-height: 980px;

  #register-background {
    width: 50%;
    background-image: url('/images/login-background.jpg');
    background-attachment: local;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  #register-form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #register-form * {
    font-size: 14px;
  }
  #register-form > form {
    width: 60%;
    max-width: 500px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  #register-form form legend {
    margin-bottom: 16px;
  }
  #register-form h1 {
    font-size: 48px;
    font-weight: bold;
  }
  #register-form > form footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }
  #register-form .switch-label {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: -8px;
  }
  #register-form > form ${Button} {
    width: 100%;
    padding: 16px;
    font-weight: 500;
  }


  @media only screen and (max-width: 1024px) {
    #register-form * {
      font-size: 12px;
    }
    #register-form > form {
      width: 80%;
      max-width: 400px;
      min-width: initial;
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    #register-form form legend {
      margin-bottom: 16px;
    }
    #register-form h1 {
      font-size: 38px;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: initial;
    padding: 32px 0;
    background: rgb(255,122,0);
    background: linear-gradient(205deg, ${props => props.theme.primary} 0%, ${props => props.theme.primaryLight} 100%);
    justify-content: center;

    #register-background {
      display: none;
    }
    #register-form {
      width: 70%;
      background-color: ${props => props.theme.background};      
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      height: fit-content;
      padding: 24px 0;
    }
    #register-form * {
      font-size: 12px;
    }
    #register-form > form {
      width: 90%;
      max-width: 400px;
      min-width: initial;
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    #register-form form legend {
      margin-bottom: 16px;
    }
    #register-form h1 {
      font-size: 32px;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 525px) {
    #register-form {
      width: 80%;
    }
  }

  @media only screen and (max-width: 412px) {
    #register-form {
      width: 90%;
    }
    #register-form h1 {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 375px) {
    #register-form {
      width: 96%;
    }
  }
`

export default Register;
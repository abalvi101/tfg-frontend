import styled from 'styled-components';
import {Login as LoginUnstyled} from './Login';
import Button from "../../components/common/button";

const Login = styled(LoginUnstyled)`
  display: flex;
  flex-wrap: nowrap;
  min-height: 980px;

  #login-background {
    width: 50%;
    background-image: url('/images/login-background.jpg');
    background-attachment: local;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  #login-form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #login-form * {
    font-size: 14px;
  }
  #login-form > form {
    width: 60%;
    max-width: 500px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  #login-form form legend {
    margin-bottom: 16px;
  }
  #login-form h1 {
    font-size: 48px;
    font-weight: bold;
  }
  #login-form > form footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }
  #login-form .switch-label {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: -8px;
  }
  #login-form > form ${Button} {
    width: 100%;
    padding: 16px;
    font-weight: 500;
  }


  @media only screen and (max-width: 1024px) {
    #login-form * {
      font-size: 12px;
    }
    #login-form > form {
      width: 80%;
      max-width: 400px;
      min-width: initial;
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    #login-form form legend {
      margin-bottom: 16px;
    }
    #login-form h1 {
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

    #login-background {
      display: none;
    }
    #login-form {
      width: 70%;
      background-color: ${props => props.theme.background};      
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      height: fit-content;
      padding: 24px 0;
    }
    #login-form * {
      font-size: 12px;
    }
    #login-form > form {
      width: 90%;
      max-width: 400px;
      min-width: initial;
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
    #login-form form legend {
      margin-bottom: 16px;
    }
    #login-form h1 {
      font-size: 32px;
      font-weight: bold;
    }
  }
  
  @media only screen and (max-width: 525px) {
    #login-form {
      width: 80%;
    }
  }
  
  @media only screen and (max-width: 412px) {
    #login-form {
      width: 90%;
    }
    #login-form h1 {
      font-size: 28px;
    }
  }
`

export default Login;
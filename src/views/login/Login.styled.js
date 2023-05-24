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
`

export default Login;
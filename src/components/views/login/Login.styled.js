import styled from "styled-components";
import { Login as UnstyledLogin } from "./Login";

const Login = styled(UnstyledLogin)`
  width: 50%;
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
`

export default Login;
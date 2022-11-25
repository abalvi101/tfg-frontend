import styled from "styled-components";
import { Input as UnstyledInput } from "./Input";

const Input = styled(UnstyledInput)`
  width: 100%; 
  div {
    width: 100%;
    position: relative;
    margin-bottom: 0.2rem;
  }
  input {
    width: 100%;
    border: 0;
    padding: ${props => props.error ? '0.75rem 1.15rem' : '0.8rem 1.2rem'};
    outline: none;
    font-size: 1rem;
    transition-duration: 0.6s;
    border: ${props => props.error ? `0.05px solid ${props.theme.error}` : 'none'};
  }
  input:focus {
    /* border: 0.05rem solid #ededed;
    padding: 0.55rem 1.55rem; */
    /* background-color: #ededed; */
    box-shadow: 2px 2px 3px ${props => props.theme.shadow};
    /* background-color: transparent; */
  }
  label {
    height: 100%;
    display: flex;
    align-items: center;
    color: ${props => props.value ? props.error ? props.theme.error : props.theme.intermediateFont : props.theme.secondaryFont};
    position: absolute;
    left: ${props => props.value ? '0.7rem' : '1.2rem'};
    top: ${props => props.value ? '-50%' : '0'};
    font-size: ${props => props.value ? '0.9rem' : 'inherit'};
    /* text-shadow: ${props => props.value ? '1px 1px 2px ' + props.theme.shadow : 'none'}; */
    transition-duration: 0.6s;
    cursor: text;
  }
  input:focus ~ label {
    font-size: 0.9rem;
    /* text-shadow: 1px 1px 2px ${props => props.theme.shadow}; */
    color: ${props => props.error ? props.theme.error : props.theme.intermediateFont};
    top: -50%;
    left: 0.7rem;
  }
  .error {
    color: ${props => props.theme.error};
    font-size: 0.9rem;
    margin-top: 0.6rem;
    transition: 5s ease;
  }
  .chapuza {
    display: ${props => props.value ? 'initial' : 'none'};
    position: absolute;
    left: 0.3rem;
    top: 0;
    background-color: white;
    height: 1px;
    transition: display 7s linear;
  }
  .chapuza > span {
    visibility: hidden;
  }
  input:focus ~ .chapuza {
    display: initial;
  }
  .focus {
    height: 2px;
    width: 0;
    background-color: ${props => props.error ? props.theme.error : props.theme.primaryLight};
    position: absolute;
    bottom: 0;
    left: 50%;
    margin: 0;
    transition: 0.8s ease;
  }
  input:focus ~ .focus {
    width: 100%;
    left: 0;
  }
`

export default Input;
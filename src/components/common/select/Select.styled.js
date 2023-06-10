import styled from "styled-components";
import { Select as UnstyledSelect } from "./Select";

const Select = styled(UnstyledSelect)`
  position: relative;
  width: 100%;

  label {
    font-size: 14px;
    color: ${props => props.error ? props.theme.error : props.theme.intermediateFont};
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    left: 0.7rem;
    top: -50%;
    cursor: text;
  }
  .input {
    width: 100%;
    padding: ${props => props.error ? '0.75rem 1.15rem' : '0.8rem 1.2rem'};
    margin-bottom: 0.2rem;
    outline: none;
    border: ${props => props.error ? `1px solid ${props.theme.error}` : null};
    font-size: 14px;
    transition-duration: 0.6s;
    border: ${props => props.error ? '0.05px solid ' + props.theme.error : 'none'};
    /* caret-color: transparent; */
    cursor: pointer;
  }
  .options_container {
    height: 0;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    z-index: 2;
    top: 2.75rem;
    left: 0;
    right: 0;
    padding: 0.4rem 0;
    background-color: ${props => props.theme.backgroundLight};
    display: none;
    transition: 2s;
  }
  .options_container.focused {
    display: initial;
    height: auto;
  }
  .focused {
    box-shadow: 2px 2px 3px ${props => props.theme.shadow};
  }
  .option {
    padding: 0.4rem 1.2rem;
    cursor: pointer;
    font-size: 14px;
  }
  .option:hover {
    background-color: #ddd;
  }
  .option.selected {
    background-color: rgba(255, 191, 105, 0.3);
  }
  .error {
    color: ${props => props.theme.error};
    font-size: 12px;
    margin-top: 0.6rem;
    transition: 5s ease;
  }
`

export default Select;
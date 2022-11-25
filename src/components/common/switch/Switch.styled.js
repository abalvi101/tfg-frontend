import styled from "styled-components";
import { Switch as UnstyledSwitch } from "./Switch";

const Switch = styled(UnstyledSwitch)`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 14px;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  ${
    props => props.disabled
      ? "opacity: 0.7; cursor: not-allowed;"
      : null
  }

  .track {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 7px;
    background-color: ${props => props.theme.primaryLight};
  }

  .trackChecked {
    background-color: ${props => props.theme.primary};
  }

  .button {
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 11px;
    left: 2px;
    background-color: #fff;
    border-radius: 9px;
    transition: all 100ms ease;
  }

  .buttonChecked {
    right: 2px;
    left: 11px;
  }
`

export default Switch;
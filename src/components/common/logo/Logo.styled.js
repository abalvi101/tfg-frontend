import styled from "styled-components";
import { Logo as UnstyledLogo } from "./Logo";

const Logo = styled(UnstyledLogo)`
  width: ${props => props.width}px;
  .st0 {
    display:none;
  }
  .st1 {
    display:inline;
    fill:none;
    stroke: ${props => props.color === 'font' ? props.theme.primaryFont : props.color === 'black' ? props.theme.black : ''};
    stroke-width: 30;
    stroke-miterlimit:10;
  }
  .st2 {
    display:inline;
    fill:none;
    stroke: ${props => props.color === 'font' ? props.theme.primaryFont : props.color === 'black' ? props.theme.black : ''};
    stroke-width: 30;
    stroke-miterlimit:10;
  }
  .st3 {
    fill:none;
    stroke: ${props => props.color === 'font' ? props.theme.primaryFont : props.color === 'black' ? props.theme.black : ''};
    stroke-width: 30;
    stroke-miterlimit:10;
  }
  .st4 {
    fill:none;
    stroke: ${props => props.color === 'font' ? props.theme.primaryFont : props.color === 'black' ? props.theme.black : ''};
    stroke-width: 30;
    stroke-miterlimit:10;
  }
  .st5 {
    fill:none;
    stroke: ${props => props.color === 'font' ? props.theme.primaryFont : props.color === 'black' ? props.theme.black : ''};
    stroke-width: 30;
    stroke-miterlimit:10;
  }
`;

export default Logo;
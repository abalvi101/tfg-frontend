import styled from "styled-components";
import { Notification as UnstyledNotification } from "./Notification";

const Notification = styled(UnstyledNotification)`
  display: flex;
  background-color: ${props => props.theme.backgroundLight};
  transition: left 0.6s ease-in, opacity 0.5s ease-in;
  height: 46px;
  width: 100%;
  box-shadow: -1px 2px 3px rgba(0,0,0,0.3);

  .color-bar {
    width: 8px;
    background-color: ${
      props => props.type === 'error'
      ? 'red'
      : props.type === 'success'
        ? 'green'
        : 'grey'
    }
  }

  .info {
    padding: 8px 16px;
    font-size: 12px;
  }

  @media only screen and (max-width: 425px) {
    
  }
`;

export default Notification;
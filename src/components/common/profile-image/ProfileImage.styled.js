import styled from 'styled-components';
import UnstyledProfileImage from './ProfileImage';

const ProfileImage = styled(UnstyledProfileImage)`
  position: relative;
  width: fit-content;

  .image {
    background: ${props => `url(${props.src ? props.src : '/icons/profile.svg'})`} 50% 50% no-repeat; /* 50% 50% centers image in div */
    background-size: cover;
    width: 200px;
    height: 200px;
    clip-path: circle();
  }
  .button {
    border: 0;
    padding: 0.8rem;
    border-radius: 50%;
    height: 2.6rem;
    width: 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
  }
  .button.edit {
    top: 0;
    right: 0;
    background-color: ${props => props.theme.primary};
  }
  .button.delete {
    bottom: 0;
    right: 0;
    background-color: ${props => props.theme.error};
  }
  .input-file {
    display: none;
  }
`

export default ProfileImage;
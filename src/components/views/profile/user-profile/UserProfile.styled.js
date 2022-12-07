import styled from 'styled-components';
import UnstyledUserProfile from './UserProfile';

const UserProfile = styled(UnstyledUserProfile)`

  .form_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem 3%;
  }
  .button {
    align-self: flex-end;
    justify-self: flex-end;
    grid-column-start: -2;
  }
`

export default UserProfile;
import styled from 'styled-components';
import UnstyledUserProfile from './UserProfile';

const UserProfile = styled(UnstyledUserProfile)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .form_wrapper, .favourite_animals {
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
  .favourite_animals .list_animal {
    width: 100%;
    max-width: 1080px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem 3%;
  }

  @media only screen and (max-width: 696px) {
    .favourite_animals .list_animal {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
  }
`

export default UserProfile;
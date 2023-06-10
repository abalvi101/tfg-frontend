import styled from 'styled-components';
import UnstyledProfile from './Profile';

const Profile = styled(UnstyledProfile)`
  padding: 32px 64px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
  }
  
  .info {
    width: 100%;
  }


  @media only screen and (max-width: 1024px) {
    padding: 5%;
  }
`

export default Profile;
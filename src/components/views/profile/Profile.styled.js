import styled from 'styled-components';
import UnstyledProfile from './Profile';

const Profile = styled(UnstyledProfile)`
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
`

export default Profile;
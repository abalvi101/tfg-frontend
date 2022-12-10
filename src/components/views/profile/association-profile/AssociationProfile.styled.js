import styled from 'styled-components';
import UnstyledAssociationProfile from './AssociationProfile';

const AssociationProfile = styled(UnstyledAssociationProfile)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .about_us {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .about_us textarea {
    width: 100%;
    border: 0;
    outline: none;
    transition: 0.8s;
    padding: 1rem;
    font-size: 1rem;
  }
  .about_us textarea:focus {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  }
  .about_us .button {
    align-self: flex-end;
  }
  .animals {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .animals_list {
    width: 100%;
    max-width: 1080px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem 3%;
  }

  @media only screen and (max-width: 696px) {
    .animals_list {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
  }
`

export default AssociationProfile;
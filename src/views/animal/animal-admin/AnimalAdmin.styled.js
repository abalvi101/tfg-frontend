import styled from 'styled-components';
import UnstyledAnimalAdmin from './AnimalAdmin';

const AnimalAdmin = styled(UnstyledAnimalAdmin)`
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.6rem;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }


  @media only screen and (max-width: 1024px) {
    padding: 5%;
  }
`

export default AnimalAdmin;
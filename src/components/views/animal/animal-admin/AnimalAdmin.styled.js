import styled from 'styled-components';
import UnstyledAnimalAdmin from './AnimalAdmin';

const AnimalAdmin = styled(UnstyledAnimalAdmin)`
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
`

export default AnimalAdmin;
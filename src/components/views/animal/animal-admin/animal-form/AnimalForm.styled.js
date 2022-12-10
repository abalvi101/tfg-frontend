import styled from 'styled-components';
import UnstyledAnimalForm from './AnimalForm';

const AnimalForm = styled(UnstyledAnimalForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  .form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem 3%;
  }
  .button {
    align-self: flex-end;
    justify-self: flex-end;
    grid-column-end: -1;
  }
`

export default AnimalForm;
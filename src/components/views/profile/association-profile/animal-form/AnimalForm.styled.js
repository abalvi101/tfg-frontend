import styled from 'styled-components';
import UnstyledAnimalForm from './AnimalForm';

const AnimalForm = styled(UnstyledAnimalForm)`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  .form {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem 3%;
  }
  .description-input {
    grid-column: 1/-1;
  }
  .button {
    align-self: flex-end;
  }
`

export default AnimalForm;
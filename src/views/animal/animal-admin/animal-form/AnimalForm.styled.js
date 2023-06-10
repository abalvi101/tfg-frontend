import styled from 'styled-components';
import Input from '../../../../components/common/input';
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
  .form > *:last-child {
    grid-column-start: 1;
    grid-column-end: -1;
  }
  .form .textarea {
    position: relative;
  }
  .form .textarea label {
    font-size: 14px;
    color: ${props => props.error ? props.theme.error : props.theme.intermediateFont};
    position: absolute;
    display: flex;
    align-items: center;
    left: 0.7rem;
    top: -8px;
    cursor: text;
  }
  .form textarea {
    width: 100%;
    border: 0;
    outline: none;
    font-size: 14px;
    padding: 0.8rem 1.2rem;
  }
  .button {
    align-self: flex-end;
    justify-self: flex-end;
    grid-column-end: -1;
  }
`

export default AnimalForm;
import styled from 'styled-components';
import Input from '../../../../components/common/input';
import UnstyledDiseaseForm from './DiseaseForm';

const DiseaseForm = styled(UnstyledDiseaseForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  .form {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem 3%;
  }
  .form > *:nth-child(n + 3) {
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
  .form .switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .form .switch label {
    font-size: 14px;
    color: ${props => props.error ? props.theme.error : props.theme.intermediateFont};
  }
  .form .switch > div {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
  }

  
  @media only screen and (max-width: 625px) {
    .form > *:nth-child(n) {
      grid-column-start: 1;
      grid-column-end: -1;
    }
  }
`

export default DiseaseForm;
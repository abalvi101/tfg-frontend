import styled from 'styled-components';
import Input from '../../../../components/common/input';
import UnstyledFosteringForm from './FosteringForm';

const FosteringForm = styled(UnstyledFosteringForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  .form {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 32px;
  }
  .form ${Input}:last-child {
    grid-column-start: 1;
    grid-column-end: -1;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 32px;
  }
`

export default FosteringForm;
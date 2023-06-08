import styled from 'styled-components';
import UnstyledAnimalViewer from './AnimalViewer';

const AnimalViewer = styled(UnstyledAnimalViewer)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
  }
  .header > h1 {
    margin-top: 0.6rem;
  }
  .header > h4 {
    color: ${props => props.theme.intermediateFont}
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  .info > section {
    display: flex;
  }
  .info > section:nth-child(1) {
    flex-direction: column;
    gap: 1rem;
  }
  .info .fostering {
    color: ${props => props.theme.secondaryFont};
  }
  .info > section > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`

export default AnimalViewer;
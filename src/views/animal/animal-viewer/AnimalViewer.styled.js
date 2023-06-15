import styled from 'styled-components';
import UnstyledAnimalViewer from './AnimalViewer';

const AnimalViewer = styled(UnstyledAnimalViewer)`
  padding: 32px 64px;
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
    gap: 32px;
  }
  .info > section {
    display: flex;
  }
  .info > section:nth-child(1) {
    flex-direction: column;
    gap: 32px;
  }
  .info > section:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 32px 16px;
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
  .info > section:last-child {
    margin-top: 16px;
  }
  .disease {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .disease .disease-name {
    font-weight: bold;
  }


  @media only screen and (max-width: 1024px) {
    padding: 5%;
    .info > section:nth-child(2) {
      grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    }
  }

  @media only screen and (max-width: 768px) {
    .info > section:nth-child(2) {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
  }
  @media only screen and (max-width: 426px) {
    * {
      font-size: 12px;
    }
    .info > section:nth-child(2) {
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    }
    .info > section:last-child {
      margin-top: 0px;
    }
  }
`

export default AnimalViewer;
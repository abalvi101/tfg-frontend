import styled from "styled-components";
import { Association as UnstyledAssociation } from "./Association";

const Association = styled(UnstyledAssociation)`
  padding: 32px 64px;

  .association-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }
  .association-info .logo {
    border-radius: 50%;
    aspect-ratio: 1;
    width: 160px;
  }
  .association-info > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .association-info > div h1 {
    font-size: 32px;
  }
  .association-info > div span {
    font-size: 16px;
  }

  .adoption-animals {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .adoption-animals h4 {
    font-size: 24px;
  }
  .animals {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 32px 16px;
  }
  
  @media only screen and (max-width: 1024px) {
    padding: 5%;
    .animals {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

  @media only screen and (max-width: 696px) {
    .animals {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      grid-gap: 24px 12px;
    }
  }

  @media only screen and (max-width: 464px) {
    .animals {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      grid-gap: 24px 8px;
    }
  }
  
  @media only screen and (max-width: 425px) {
    .association-info .logo {
      width: 120px;
    }
    .association-info > div h1 {
      font-size: 20px;
    }
    .association-info > div span {
      font-size: 12px;
    }
    .adoption-animals h4 {
      font-size: 16px;
    }
  }
`;

export default Association;
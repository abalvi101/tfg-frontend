import styled from "styled-components";
import { Adoptions as UnstyledAdoptions } from "./Adoptions";

const Adoptions = styled(UnstyledAdoptions)`
  padding: 32px 64px;

  .animals {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 32px 16px;
  }
  .filters {    
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 0.6rem 3%;
  }
  .filters .filter_button {
    justify-self: flex-end;
    align-self: flex-end;
    grid-column-start: -2;
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
`

export default Adoptions;
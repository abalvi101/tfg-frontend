import styled from "styled-components";
import { Associations as UnstyledAssociations } from "./Associations";

const Associations = styled(UnstyledAssociations)`
  padding: 32px 64px;

  .associations {
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
    .associations {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
  }
`

export default Associations;
import styled from "styled-components";
import { Adoptions as UnstyledAdoptions } from "./Adoptions";

const Adoptions = styled(UnstyledAdoptions)`
  .animals {
    max-width: 1080px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem 3%;
  }
  .filters {
    /* display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: center; */
    
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

  @media only screen and (max-width: 696px) {
    .animals {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
  }
`

export default Adoptions;
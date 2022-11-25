import styled from "styled-components";
import { Adoptions as UnstyledAdoptions } from "./Adoptions";

const Adoptions = styled(UnstyledAdoptions)`
  .animals {
    max-width: 1080px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* grid-template-rows: 200px; */
    grid-gap: 3%;
  }
`

export default Adoptions;
import styled from "styled-components";
import UnstyledAnimal from "./Animal";

const Animal = styled(UnstyledAnimal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header .name {
    display: flex;
    gap: 1rem;
  }
  .header .asociation {
    color: ${props => props.theme.secondaryFont};
  }
`

export default Animal;
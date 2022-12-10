import styled from "styled-components";
import { AnimalCard as UnstyledAnimalCard } from "./AnimalCard";

const AnimalCard = styled(UnstyledAnimalCard)`
  box-shadow: 0px 1px 5px rgba(193, 193, 193, 0.6);
  border-radius: 5px;
  background-color: ${props => props.theme.background};
  /* width: 100%; */
  padding: 6%;
  position: relative;
  cursor: pointer;

  img.imagen {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 5px;
  }
  img.acogida {
    width: 25%;
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.6rem 0;
  }
  header h3 {
    font-weight: 500;
    color: ${props => props.theme.primary}
  }
  header img {
    height: 1.6rem;
    ${props => props.gender ? 'transform: rotate(45deg);' : null}
  }
  .body {
    position: relative;
  }
  .body img.like {
    position: absolute;
    width: 1.6rem;
    bottom: 0;
    right: 0;
  }
`

export default AnimalCard;
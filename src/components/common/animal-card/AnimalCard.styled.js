import styled from "styled-components";
import { AnimalCard as UnstyledAnimalCard } from "./AnimalCard";

const AnimalCard = styled(UnstyledAnimalCard)`
  background-color: ${props => props.theme.background};
  position: relative;
  cursor: pointer;

  section.card-info {
    padding: 16px;
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-radius: 0 0 6px 6px;
    border: 1px solid ${props => props.theme.grey};
    border-top: 0;
    position: relative;
  }
  section.card-info * {
    font-size: 14px;
  }

  img.imagen {
    border-radius: 6px 6px 0 0;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 4/3;
  }
  img.acogida {
    width: 48px;
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  header h3 {
    display: flex;
    font-weight: 500;
    font-size: 16px;
  }
  header div img {
    height: ${props => props.animal.gender == 1 ? 16 : 19}px;
    /* ${props => props.gender ? 'transform: rotate(45deg);' : null} */
  }
  img.like {
    height: 24px;
  }
  .body {
    position: relative;
  }


  @media only screen and (max-width: 696px) {
    img.like {
      position: absolute;
      right: 8px;
      top: -32px;
    }
  }
`

export default AnimalCard;
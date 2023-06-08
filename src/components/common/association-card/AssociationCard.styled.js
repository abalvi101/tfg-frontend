import styled from 'styled-components';
import {AssociationCard as UnstyledAssociationCard} from './AssociationCard';

const AssociationCard = styled(UnstyledAssociationCard)`
  cursor: pointer;
  display: flex;
  align-items: center;
  /* gap: 32px; */
  justify-content: space-between;
  font-size: 14px;

  .logo {
    ${props => props.association.image
      ? `
          background-image: url(${props.association.image});
          background-position: center;
          background-size: cover;
        `
      : 'background-color: grey;'
    }
    border-radius: 50%;
    aspect-ratio: 1;
    /* margin-right: 24px; */
    width: 33%;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 57%;
  }
  .info > h3 {
    margin-bottom: 6px;
    display: flex;
  }


  @media only screen and (max-width: 1024px) {
    font-size: 12px;
    .info > h3 {
      font-size: 14px
    }
  }

  @media only screen and (max-width: 425px) {
    font-size: 14px;
    .info > h3 {
      font-size: 16px
    }
  }
`;

export default AssociationCard;
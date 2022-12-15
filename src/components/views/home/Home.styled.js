import styled from 'styled-components';
import UnstyledHome from './Home';

const Home = styled(UnstyledHome)`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .about_us, .adopt {
    display: flex;
    gap: 4rem;
    align-items: center;
  }
  .about_us > *, .adopt > * {
    width: 100%;
  }
  .about_us .image {
    background-image: url('/images/cat-and-dog.jpg');
    background-size: cover;
    background-position: center;
    aspect-ratio: 1600/1024;
    border-radius: 0.5rem;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.1rem;
    gap: 1rem;
  }
  .about_us .text p:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .text ul {
    list-style: circle inside;
  }
  .text ul li {
    margin-top: 0.4rem;
  }
  .adopt .image {
    background-image: url('/images/sleeping-dog.webp');
    background-size: cover;
    background-position: center;
    aspect-ratio: 1600/1024;
    border-radius: 0.5rem;
  }
  .adopt .text {
    align-items: flex-end;
  }
  .adopt p {
    text-align: right;
  }
  .adopt .text *:nth-child(3) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 890px) {
    .about_us {
      flex-direction: column;
    }
    .adopt {
      flex-direction: column-reverse;
    }
    .adopt .text {
      align-items: flex-end;
    }
  }
`

export default Home;
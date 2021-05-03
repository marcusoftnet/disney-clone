import styled from 'styled-components';
import { shuffle } from '../lib/arrayHelpers';

const viewers = [
  {
    name: 'Disney',
    image: 'viewers-disney.png',
    video: '1564674844-disney.mp4',
  },
  { name: 'Pixar', image: 'viewers-pixar.png', video: '1564676714-pixar.mp4' },
  {
    name: 'Marvel',
    image: 'viewers-marvel.png',
    video: '1564676115-marvel.mp4',
  },
  {
    name: 'Starwars',
    image: 'viewers-starwars.png',
    video: '1608229455-star-wars.mp4',
  },
  {
    name: 'National Geographic',
    image: 'viewers-national.png',
    video: '1564676296-national-geographic.mp4',
  },
];

const Viewers = () => {
  return (
    <Container>
      {shuffle(viewers).map((viewer) => (
        <Wrap>
          <a href={`/${viewer.name}`}>
            <img
              src={`/images/${viewer.image}`}
              alt={`${viewer.name} movies`}
            />
            <video autoPlay={true} loop={true} playsInline={true}>
              <source src={`/videos/${viewer.video}`} type='video/mp4' />
            </video>
          </a>
        </Wrap>
      ))}
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 38px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 0.5s ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0px;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

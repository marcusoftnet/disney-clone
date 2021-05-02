import styled from 'styled-components';
import { shuffle } from '../lib/arrayHelpers';

const viewers = [
  { name: 'Disney', image: 'viewers-disney.png' },
  { name: 'Pixar', image: 'viewers-pixar.png' },
  { name: 'Marvel', image: 'viewers-marvel.png' },
  { name: 'Starwars', image: 'viewers-starwars.png' },
  { name: 'National Geographic', image: 'viewers-national.png' },
];

const Viewers = () => {
  return (
    <Container>
      {shuffle(viewers).map((viewer) => (
        <Wrap>
          <a href={`/${viewer.name}`}>
            <img src={`/images/${viewer.image}`} alt={`${viewer.name}`} />
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
    top: 0;
  }
`;

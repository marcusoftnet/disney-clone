import styled from 'styled-components';
import ImageSlider from '../components/ImageSlider';
import RecommendationRow from './RecommendationRow';
import Viewers from './Viewers';
const Home = () => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <RecommendationRow title='Recommended for you' />
      <RecommendationRow title='New to Disney+' />
      <RecommendationRow title='Orignals' />
      <RecommendationRow title='Trending' />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  top: 72px;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

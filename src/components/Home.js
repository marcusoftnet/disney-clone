import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ImageSlider from '../components/ImageSlider';
import {
  selectNewDisney,
  selectOriginal,
  selectRecommend,
  selectTrending,
  setMovies,
} from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { db } from '../firebase';
import RecommendationRow from './RecommendationRow';
import Viewers from './Viewers';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const getMoviesFromSnapshot = (docs) => {
    const movies = {
      recommend: [],
      newDisney: [],
      original: [],
      trending: [],
    };

    docs.forEach((doc) => {
      const movie = { id: doc.id, ...doc.data() };
      switch (movie.type) {
        case 'recommend':
          movies.recommend = [...movies.recommend, movie];
          break;

        case 'new':
          movies.newDisney = [...movies.newDisney, movie];
          break;

        case 'original':
          movies.original = [...movies.original, movie];
          break;

        case 'trending':
          movies.trending = [...movies.trending, movie];
          break;
        default:
          console.error('Unknown movie type');
          console.error({ movie });
      }
    });

    return movies;
  };

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      const movies = getMoviesFromSnapshot(snapshot.docs);

      dispatch(setMovies(movies));
    });
  }, [userName, dispatch]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <RecommendationRow
        selector={selectRecommend}
        title='Recommended for you'
      />
      <RecommendationRow selector={selectNewDisney} title='New to Disney+' />
      <RecommendationRow selector={selectOriginal} title='Orignals' />
      <RecommendationRow selector={selectTrending} title='Trending' />
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

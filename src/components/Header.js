import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import NavMenuItem from './NavMenuItem';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney logo' />
      </Logo>

      {!userName ? (
        <LoginButton onClick={handleAuth}>Login</LoginButton>
      ) : (
        <>
          <NavMenu>
            <NavMenuItem title='Home' />
            <NavMenuItem title='Search' />
            <NavMenuItem title='Watchlist' />
            <NavMenuItem title='Movies' />
            <NavMenuItem title='Series' />
          </NavMenu>
          <UserImage onClick={handleSignOut} src={userPhoto} alt={userName} />
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 10px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 20px;

  @media (max-width: 760px) {
    display: none;
  }
`;

const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImage = styled.img`
  height: 60%;
  max-height: 60%;
  border-radius: 24px;
`;

export default Header;

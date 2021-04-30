import styled from 'styled-components';

const NavMenuItem = ({
  title,
  link = `/${title}`,
  iconFileName = `${title}-icon.svg`,
}) => {
  return (
    <MenuItemLink href={link.toLowerCase()}>
      <img src={`/images/${iconFileName}`} alt={title} />
      <span>{title.toUpperCase()}</span>
    </MenuItemLink>
  );
};

export default NavMenuItem;

const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 12px;

  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    margin-left: 3px;

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: '';
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transform: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden:
      height: auto;
    }
  }

  &:hover {
    span:before{
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

import styled from 'styled-components'
import { rem } from 'polished'

export const Header = styled.header`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #DEDEDE;

  span {
    color: black;
    font-size: ${rem(36)};
    font-weight: bold;
    font-family: 'Cinzel Decorative';
    margin: 0;
    transition: .3s;

    &:hover {
      color: #ff3530;
    }
  }
`

export const HeaderContent = styled.div`
  max-width: 1000px;
  padding: 2em 1em;
  @media (max-width: 768px) {
    padding: 1em;
  }
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    text-decoration: none;
  }
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none;
  }

  & > a {
    margin-right: 1em;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${rem(20)};
    font-family: 'Bodoni Moda', serif;
    transition: .3s;

    &:hover {
      border-bottom: 1px solid #ff3530;
      color: #ff3530;
    }
  }

`

export const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`

export const MobileMenuContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  .drawer-menu.open {
    right: 0;
  }

  .search {
    border: 0;
    background: transparent;
    width: ${rem(16)};
    margin-right: ${rem(15)};
  }
`

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: -100%;
  width: 100%;
  height: calc(100vh);
  background-color: #fff;
  transition: right 0.3s ease-in-out;
  z-index: 100;
  & > a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-family: 'Bodoni Moda', serif;
    text-align: right;
    margin-right: ${rem(20)};
    margin-top: ${rem(20)};
  }
`

export const MobileMenuButton = styled.button`
  background: transparent;
  border: 0;
`

export const MobileSearchBar = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`
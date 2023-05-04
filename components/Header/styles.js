import styled from 'styled-components'

export const Header = styled.header`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #DEDEDE;

  h1 {
    color: black;
    font-family: 'Cinzel Decorative';
    margin: 0;
  }
`

export const HeaderContent = styled.div`
  max-width: 1000px;
  padding: 2em 1em;
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
  & > a {
    margin-right: 1em;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-family: 'Bodoni Moda', serif;
  }

  .active {
    border-bottom: 1px solid black;
    padding-bottom: 10px;
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
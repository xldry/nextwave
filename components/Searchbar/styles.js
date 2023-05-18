import styled from "styled-components";
import { rem } from 'polished';

export const SearchContainer = styled.form`
  margin-right: ${rem(20)};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    position: absolute;
    right: ${rem(15)};
    cursor: pointer;

    svg {
      height: ${rem(16)};
      color: #333;
    }
  }
`

export const Searchbar = styled.input`
  height: 36px;
  width: 250px;
  border: 1px solid #DEDEDE;
  padding-left: ${rem(10)};
  font-family: 'Roboto', sans-serif;
  font-size: ${rem(12)};
  font-style: italic;
  font-family: 'Roboto Mono', monospace;
  color: #555;
`;
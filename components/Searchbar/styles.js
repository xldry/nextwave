import styled from "styled-components";
import { rem } from 'polished';

export const SearchContainer = styled.form`
  margin-right: ${rem(20)};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0;
    padding: ${rem(0)} ${rem(16)} ${rem(16)} ${rem(16)};
  }

  button {
    background: transparent;
    border: 0;
    position: absolute;
    right: ${rem(15)};
    @media (max-width: 768px) {
      right: ${rem(24)};
    }
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
  @media (max-width: 768px) {
    width: 100%;
  }
  border: 1px solid #DEDEDE;
  padding-left: ${rem(10)};
  font-family: 'Roboto', sans-serif;
  font-size: ${rem(12)};
  font-style: italic;
  font-family: 'Roboto Mono', monospace;
  color: #555;
  transition: .2s;

  &:focus {
    border-bottom: 1px solid #ff3530;
    outline: none;
  }
`;
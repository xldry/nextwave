import styled from "styled-components";
import { rem } from "polished";

export const SearchResult = styled.div`
  margin-top: ${rem(20)};

  h1 {
    font-size: ${rem(36)};
  }

  button {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #ff3530;
    font-family: 'Noto Serif', serif;
    font-size: ${rem(16)};
    padding-bottom: ${rem(3)};
    color: black;
    cursor: pointer;
    margin-bottom: ${rem(20)};
    transition: .3s;

    &:hover {
      color: #ff3530;
    }
  }
`
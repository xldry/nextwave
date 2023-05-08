import styled from "styled-components";
import { rem } from "polished";

export const AboutContainer = styled.div`
  margin: ${rem(20)} ${rem(20)};
`

export const AboutDescription = styled.div`
  padding: ${rem(10)} ${rem(20)};
  border: 1px solid #1e1e1e;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: ${rem(16)};
    color: black;
    text-decoration: none;
    font-weight: 500;
  }

  a {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid #ff3530;

    &:hover {
      color: #ff3530;
    }
  }
`

export const AboutPicture = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-bottom: 0;
  padding: ${rem(10)};

  img {
    border-radius: 50%;
  }
`
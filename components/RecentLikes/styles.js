import styled from "styled-components";
import { rem } from "polished";

export const RecentLikesContainer = styled.div`
  h2 {
    margin: 0
  }

  p {
    margin-bottom: ${rem(20)};
  }
`

export const TopAlbumsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-row-gap: ${rem(20)};
  max-width: 600px;
  margin: 0 auto;
`

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${rem(16)};
  text-align: center;
  max-width: 175px;
  margin: 0 auto;
  position: relative;

  &:hover {
    a {
      display: block;
      background: white;
      padding: ${rem(5)};
    }
    img {
      filter: blur(3px);
      transition: filter 0.3s ease;
    }
  }

  a {
    position: absolute;
    top: 60px;
    display: none;
    color: black;
    text-decoration: none;
  }

  p {
    &:nth-child(1) {
      font-weight: bold;
    }

    margin: 0;
  }
`
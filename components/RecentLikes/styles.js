import styled from "styled-components";
import { rem } from "polished";

export const RecentLikesContainer = styled.div`
  h2 {
    margin-bottom: ${rem(10)};
    @media (max-width: 768px) {
      padding: 0 ${rem(10)};
      line-height: 47px;
    }
  }

  p {
    margin-bottom: ${rem(20)};
    @media (max-width: 768px) {
      padding: 0 ${rem(20)};
    }
  }
`

export const TopAlbumsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-row-gap: ${rem(20)};
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
    padding: 0 ${rem(15)};
  }
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
  @media (max-width: 768px) {
    img {
      max-width: 140px;
    }
  }

  &:hover {
    @media (min-width: 768px) {
      .desktop-link {
        display: block;
        background: white;
        padding: ${rem(5)};
        box-shadow: 5px 5px 1px black;
      }
      img {
        filter: blur(3px);
        transition: filter 0.3s ease;
      }
    }
  }

  .desktop-link {
    position: absolute;
    top: 60px;
    display: none;
    color: black;
    text-decoration: none;
    @media (max-width: 768px) {
      display: none;
    }
  }

  p {
    &:nth-child(1) {
      font-weight: bold;
    }

    margin: 0;
  }

  .mobile-link {
    display: none;
    color: inherit;
    @media (max-width: 768px) {
      display: block;
      font-size: ${rem(14)};
      margin-top: ${rem(5)};
    }
  }
`
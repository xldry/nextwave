import styled from 'styled-components';
import { rem } from 'polished'

export const Separator = styled.div`
  width: 360px;
  height: 2px;
  background: rgb(255, 53, 48);
  margin: ${rem(50)} auto;

`
export const LatestPost = styled.div`
  margin-top: ${rem(50)};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: auto;
    }
  }

  .post-link {
    text-decoration: none;

    &:visited {
      color: black;
    }
  }

  .latest-post-title {
    @media (max-width: 768px) {
      font-size: ${rem(36)};
      padding: 0 10px;
    }
  }

  .latest-post-excerpt {
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }
`

export const AllPosts = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${rem(0)} ${rem(50)};
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0;
  }

  .post-link {
    text-decoration: none;

    &:visited {
      color: black;
    }
  }

  h2 {
    font-family: 'Bodoni Moda';
    font-size: ${rem(40)};
    color: black;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
    font-weight: 300;
  }

  div {
    img {
      margin: 0;
      margin: 0 auto 15px auto;
      height: auto;
    }
  }
`
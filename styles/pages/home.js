import styled from 'styled-components';
import { rem } from 'polished'

export const LatestPost = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;

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
    font-family: 'Bodoni Moda';
    font-size: ${rem(54)};
    text-decoration: none;
    color: black;
    text-align: center;
    line-height: 100%;
    margin: 20px 0;
    @media (max-width: 768px) {
      font-size: ${rem(36)};
      padding: 0 10px;
    }
  }

  .latest-post-excerpt {
    font-size: ${rem(16)};
    font-family: monospace;
    font-weight: 400;
    color: #555;
    margin-bottom: 30px;
    text-align: center;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }

  .separator {
    width: 320px;
    height: 2px;
    background: rgb(255, 53, 48);
    margin: 0 auto;
  }
`

export const AllPosts = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .post-link {
    text-decoration: none;

    &:visited {
      color: black;
    }
  }

  .post-title {
    font-family: 'Roboto', sans-serif;
    font-size: ${rem(18)};
    text-align: center;
    color: black;
    text-decoration: none;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: ${rem(16)};
      line-height: ${rem(20)};
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
    width: 40%;
    text-align: center;

    img {
      margin-bottom: 15px;
      height: auto;
    }
  }
`
import styled from 'styled-components'
import { rem } from 'polished'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 0 0;

  img {
    height: auto;
  }

  h1 {
    font-family: 'Bodoni Moda';
    font-size: ${rem(54)};
    text-decoration: none;
    color: black;
    text-align: center;
    line-height: 100%;
    margin-bottom: 15px;
    @media (max-width: 768px) {
      font-size: ${rem(36)};
      padding: 0 10px;
    }
  }

  h2 {
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
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${rem(25)} auto ${rem(0)} auto;
  padding-top: ${rem(25)};
  border-top: 2px solid black;
  max-width: 640px;
  position: relative;

  .separator {
    width: 320px;
    height: 2px;
    background: rgb(255, 53, 48);
    margin: 20px auto 0 auto
  }

  & > p {
    margin: 0;
  }
`

export const AuthorAvatar = styled.div`
  img {
    border-radius: 50%;
  }
`

export const PostDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${rem(10)};

  p {
    margin: 0;
    font-weight: 500;
    font-size: ${rem(16)};
  }

  time {
    margin: 0;
    font-weight: 400;
    font-size: ${rem(14)};
  }
`

export const SocialShare = styled.div`
  box-shadow: 0px 1px 4px #eaeaea;
  height: ${rem(44)};
  border-radius: 4px;
  position: absolute;
  right: 0;

  button {
    width: ${rem(70)};
    height: ${rem(44)};
    background: white;
    border: 1px solid #eaeaea !important;
    cursor: pointer !important;
    font: initial !important;

    &:hover {
      background: #eaeaea;
    }

    &:nth-child(1) {
      border-radius: 4px 0 0 4px;
    }

    &:nth-child(2) {
      border-left: 0 !important;
      border-radius: 0 4px 4px 0;
    }

    svg {
      width: ${rem(22)};
    }
  }
`;

export const PostContent = styled.article`
  margin: 50px auto 0 auto;
  font-family: 'Noto Serif', serif;
  font-weight: 400;
  font-size: ${rem(16)};
  max-width: 640px;

  div {
    p {
      line-height: 28px;
      margin-bottom: 20px;
      color: #1a1a1a;
      @media (max-width: 768px) {
        padding: 0 20px;
      }

      img {
        margin: 0 auto;
      }

      a {
        color: black;
        text-decoration: none;
        border-bottom: 1px solid #ff3530;
        &:visited {
          color: black;
        }
        &:hover {
          color: #ff3530;
        }
      }
    }
  }
`
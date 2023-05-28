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
    margin-bottom: ${rem(15)};
    @media (max-width: 768px) {
      font-size: ${rem(36)};
      padding: ${rem(0)} ${rem(10)};
    }
  }

  h2 {
    font-size: ${rem(16)};
    font-family: monospace;
    font-weight: 400;
    color: #555;
    margin-bottom: ${rem(30)};
    text-align: center;
    @media (max-width: 768px) {
      padding: ${rem(0)} ${rem(20)};
    }
  }
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${rem(25)} auto ${rem(0)} auto;
  padding-top: ${rem(25)};
  border-top: 1px solid #ccc;
  max-width: 640px;
  position: relative;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: ${rem(20)};
    border: 0;
  }

  .separator {
    width: 320px;
    height: 2px;
    background: rgb(255, 53, 48);
    margin: ${rem(20)} auto ${rem(0)} auto;
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
  margin-bottom: ${rem(20)};

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
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
  }

  button {
    width: ${rem(70)};
    @media (max-width: 768px) {
      width: 50%;
    }
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
  margin: ${rem(25)} auto ${rem(0)} auto;
  font-family: 'Noto Serif', serif;
  font-weight: 400;
  font-size: ${rem(16)};
  max-width: 640px;
  @media (max-width: 768px) {
    margin: ${rem(10)} auto ${rem(0)} auto;
    padding: ${rem(0)} ${rem(20)};
  }

  div {
    p {
      line-height: 28px;
      margin-bottom: ${rem(20)};
      color: #1a1a1a;

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

    blockquote {
      margin: ${rem(30)} ${rem(0)};
      text-align: center;
      font-style: italic;
    }
  }
`

export const Tags = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: ${rem(12)};
  font-weight: 400;
  color: #555;
  margin-top: ${rem(15)};
  text-transform: uppercase;

  a {
    color: #000;
    transition: .3s;
    margin: 0 ${rem(5)};

    &:hover {
      color: #ff3530;
      border-bottom: 1px solid #ff3530;
    }
  }
`

export const ReadNext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${rem(50)};

  .separator {
    height: 1px;
    width: 100%;
    background: #ccc;
  }

  img {
    margin-bottom: ${rem(-15)};
    z-index: 999;
  }

  h3 {
    font-family: 'Bodoni Moda';
    font-size: ${rem(40)};
    margin: ${rem(20)} ${rem(0)};
  }
`

export const ReadNextPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-column-gap: ${rem(20)};

  .post-link {
    text-decoration: none;

    &:visited {
      color: black;
    }
  }

  div {
    width: 100%;
    text-align: center;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      max-width: 280px;
      margin: 0 auto;
    }

    img {
      margin-bottom: ${rem(15)};
    }
  }

  .post-title {
    font-family: 'Roboto', sans-serif;
    font-size: ${rem(16)};
    text-align: center;
    color: black;
    text-decoration: none;
    font-weight: 500;
    margin-bottom: ${rem(15)};
    margin-top: ${rem(0)};
  }

  h2 {
    font-family: 'Bodoni Moda';
    font-size: ${rem(40)};
    color: black;
    text-align: center;
    width: 100%;
    margin-bottom: ${rem(30)};
    font-weight: 300;
  }
`

export const ReviewHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${rem(20)} 0;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    padding: ${rem(20)};
    justify-content: center;
  }
`

export const Review = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: ${rem(12)};
    font-weight: 500;
    padding: ${rem(20)} 0;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    li {
      margin-right: ${rem(24)};
      margin-bottom: ${rem(5)};
    }
  }
`

export const ReviewTitle = styled.div`
  text-align: center;
  h1 {
    font-size: ${rem(24)};
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  h2 {
    font-size: ${rem(14)};
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 0 ${rem(20)};
  }
`

export const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: ${rem(36)};
    font-style: italic;
    font-weight: bold;
    margin-bottom: ${rem(15)};
  }

  h3 {
    font-size: ${rem(26)};
    font-weight: 300;
  }

  span {
    font-size: ${rem(12)};
    margin-top: ${rem(20)};
    @media (max-width: 768px) {
      margin-top: ${rem(15)};
      margin-bottom: ${rem(15)};
    }
  }
`

export const AlbumScore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    @media (max-width: 768px) {
      max-width: 150px;
      max-height: 150px;
    }
  }

  div {
    width: 134px;
    height: 134px;
    border: 8px solid #ff3530;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${rem(20)};
  }

  p {
    font-size: ${rem(48)};
    color: #ff3530;
    font-weight: bold;
  }
`
import styled from 'styled-components'
import { rem } from 'polished'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: black;
  padding: ${rem(10)} ${rem(0)};
  margin-top: ${rem(50)};

  div {
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    span {
      font-family: 'Cinzel Decorative';
      font-size: ${rem(32)};
      margin-bottom: ${rem(15)};
    }

    p {
      width: 40%;
      @media (max-width: 768px) {
        width: 80%;
      }
      text-align: center;
      font-family: 'Noto Serif', sans-serif;
      font-size: ${rem(16)};
      margin-bottom: ${rem(15)};
    }

    ul {
      list-style-type: none;
      display: inline-flex;
      padding: 0;

      li {
        &:not(:last-child) {
          margin-right: 10px;
        }

        a {
          color: white;
          text-decoration: none;
          padding-bottom: ${rem(3)};
          border-bottom: 1px solid white;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;

          &:hover {
            background: #FFD900;
            color: black;
            border-bottom: 0;
          }
        }
      }
    }
    small {
      text-align: center;
      margin-top: ${rem(15)};
      font-family: 'Roboto', sans-serif;
    }
  }
`

export const ScrollingText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;

  @keyframes scroll {
    0% {
      transform: translateX(100%); /* Start scrolling from the right side */
    }
    
    100% {
      transform: translateX(-100%); /* Scroll to the left side */
    }
  }

  div {
    display: inline-block;
    animation: scroll 20s linear infinite;
    width: 100%;

    p {
      width: 100%;
      text-transform: uppercase;
      font-weight: 300;
      font-family: 'Roboto Mono', monospace;

      span {
        font-weight: 500;
        font-family: 'Roboto Mono', monospace;
        font-size: ${rem(18)};
      }
    }
  }
`;
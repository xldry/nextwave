import styled from 'styled-components'
import { rem } from 'polished'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: black;
  padding: ${rem(50)} ${rem(0)};
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
        margin: 0 10px;

        a {
          color: white;
          text-decoration: none;
          padding-bottom: ${rem(3)};
          border-bottom: 1px solid white;
        }
      }
    }
    small {
      text-align: center;
      margin-top: ${rem(15)};
    }
  }
`
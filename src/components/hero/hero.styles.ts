import { styled } from "styled-components";

export const HeroContainer = styled.section`
  .left {
    max-width: 50rem;
    margin-right: auto;
    margin-top: 17rem;
    margin-bottom: 1.7rem;
    img {
      filter: grayscale(100%);
      height: 8rem;
      width: 8rem;
      object-fit: cover;
      border-radius: 50%;
    }

    .heading {
      font-size: 8rem;
      letter-spacing: 0em;
      line-height: 1.1;
      text-align: left;
      font-weight: 400;
      margin-top: 5rem;
    }

    .sub-heading {
      color: #ffffff;
      font-size: 1.6rem;
      letter-spacing: 0em;
      line-height: 1.5;
      text-align: left;
      font-weight: 500;
      margin-top: 5rem;
    }

    .button {
      border: none;
      cursor: pointer;
      padding: 15px 15px 15px 15px;
      border-radius: 10px;
      font-weight: 500;
      font-size: 16px;
      font-family: "DM Sans", sans-serif;
      font-style: normal;
      letter-spacing: 0em;
      line-height: 1em;
      text-align: center;
      background: rgb(101, 100, 219);
      color: rgb(13, 19, 23);
      z-index: 1;
      width: fit-content;
      margin-top: 5rem;
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/
  @media (max-width: 544px) {
    .left {
      margin-top: 14rem;
      .heading {
        text-align: left;
        font-size: 7rem;
        margin-top: 3rem;
      }
      .sub-heading {
        margin-top: 2rem;
      }

      .button {
        margin-top: 2rem;
      }
    }
  }
`;

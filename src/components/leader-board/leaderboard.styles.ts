import { styled } from "styled-components";

export const LeaderBoardContainer = styled.section`
  .heading {
    font-weight: 400;
    text-align: center;
  }

  .sub-heading {
    font-size: 16px;
    letter-spacing: 0em;
    line-height: 1.5;
    text-align: center;
    margin-top: 1.5rem;
    max-width: 48rem;
    margin: 3rem auto 3rem auto;
  }

  .leaders {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    .master {
      background-color: #162027;
      padding: 40px 40px 40px 40px;
      border-radius: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 48rem;
      .name {
        font-size: 2rem;
        margin-top: 2rem;
      }

      .title {
        font-size: 1.6rem;
        font-weight: 500;
        margin-top: 1rem;
      }

      img {
        height: 8rem;
        width: 8rem;
        object-fit: cover;
        border-radius: 50%;
        filter: grayscale(100%);
      }
    }
  }
`;

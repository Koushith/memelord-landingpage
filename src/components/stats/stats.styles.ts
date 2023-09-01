import { styled } from "styled-components";

export const StatsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .stat {
    padding: 60px 60px 60px 60px;
    background-color: #162027;
    border-radius: 3rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
    text-align: center;
    color: #fff;
    min-width: 32rem;

    p {
      font-size: 4rem;
    }
    .heading {
      font-size: 48px;
      letter-spacing: 0em;
      line-height: 1.2;
      font-weight: 400;
      margin-top: 2rem;
    }

    .sub-heading {
      font-size: 1.6rem;

      letter-spacing: 0em;
      line-height: 1.2;
      font-weight: 400;
      margin-top: 2rem;
    }
  }
`;

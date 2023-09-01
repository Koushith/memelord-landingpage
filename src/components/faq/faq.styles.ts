import { styled } from "styled-components";

export const FAQContainer = styled.section`
  .heading {
    margin-top: 10rem;
  }
  .faq-lists {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6rem;
    gap: 10rem;
    margin-bottom: 10rem;
  }

  .question {
    color: #ffffff;
    font-size: 2rem;
    letter-spacing: -0.025em;
    line-height: 1.5;
  }

  .answer {
    margin-top: 1rem;
    font-size: 1.6rem;
    letter-spacing: 0em;
    line-height: 1.5;
  }

  /**************************/
  /* BELOW 944px (Tablets) -> 59*16=944 */
  /**************************/

  @media (max-width: 944px) {
    .faq-lists {
      flex-wrap: wrap;
      gap: 4rem;
    }
  }
`;

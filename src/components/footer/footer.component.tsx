import { styled } from "styled-components";
import { Paragraph } from "..";

export const FooterContainer = styled.footer`
  padding: 4rem;
  .footer-text {
    text-align: center;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph className="footer-text">
        &copy; Memeify - {new Date().getFullYear()}. Built by Koushith Amin.
      </Paragraph>
    </FooterContainer>
  );
};

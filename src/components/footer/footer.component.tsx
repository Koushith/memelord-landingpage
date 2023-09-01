import { styled } from "styled-components";
import { Paragraph } from "..";

export const FooterContainer = styled.footer`
  padding: 4rem;
  cursor: pointer;
  .footer-text {
    text-align: center;
    cursor: pointer; // Add a pointer cursor to indicate it's clickable
  }
`;

export const Footer = () => {
  return (
    <FooterContainer
      onClick={() => window.open("https://www.koushith.com", "_blank")}
    >
      <Paragraph className="footer-text">
        &copy; Memeify - {new Date().getFullYear()}. Built by Koushith Amin.
      </Paragraph>
    </FooterContainer>
  );
};

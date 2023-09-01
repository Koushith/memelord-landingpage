import { Paragraph } from "..";
import { HeroContainer } from "./hero.styles";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <div className="left">
        <img
          src="https://framerusercontent.com/images/ZOzqeVzDY6TxZFI0IFJhXZbbEqU.jpg?scale-down-to=512"
          alt="img"
          className="hero-image"
        />
        <h1 className="heading">Memeify.</h1>
        <Paragraph className="sub-heading">
          Looking for a place to prove your memeing genius? Welcome to Memeify,
          the ultimate hub for OG Memers. We'll help you create undeniable proof
          that you're the original mastermind behind the dankest memes on the
          web.
        </Paragraph>

        <div className="button">
          <a target="_next" href="https://memelord.vercel.app/">
            Try Now
          </a>
        </div>
      </div>
    </HeroContainer>
  );
};

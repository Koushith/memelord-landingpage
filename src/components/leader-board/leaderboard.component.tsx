import { Heading, Paragraph } from "..";
import { LeaderBoardContainer } from "./leaderboard.styles";

export const LeaderBoardSection = () => {
  return (
    <LeaderBoardContainer>
      <Heading size={3.2} className="heading">
        Meme Masters
      </Heading>
      <Paragraph className="sub-heading">
        Meet the memeologists behind Memeify:
      </Paragraph>

      <div className="leaders">
        <div className="master">
          <img
            src="https://framerusercontent.com/images/1ZpSa1mAZcVwMpV9MYrCzNqbE.jpg?scale-down-to=512"
            alt="ing"
          />
          <Heading className="name" size={2}>
            Koushith
          </Heading>
          <Paragraph className="title" size={1.6}>
            Meme Magician
          </Paragraph>
        </div>

        <div className="master">
          <img
            src="https://framerusercontent.com/images/1ZpSa1mAZcVwMpV9MYrCzNqbE.jpg?scale-down-to=512"
            alt="ing"
          />
          <Heading className="name" size={2}>
            Koushith
          </Heading>
          <Paragraph size={1.6}>Meme Magician</Paragraph>
        </div>
      </div>
    </LeaderBoardContainer>
  );
};

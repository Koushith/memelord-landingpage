import { Heading, Paragraph } from "..";
import { StatsSection } from "./stats.styles";

export const StatusSection = () => {
  return (
    <StatsSection>
      <div className="stat">
        <p style={{ fill: "#fff" }}>🚀</p>
        <Heading className="heading">10K+</Heading>
        <Paragraph className="sub-heading">Memes Rated</Paragraph>
      </div>
      <div className="stat">
        <p>🏆</p>
        <Heading className="heading">500+</Heading>
        <Paragraph className="sub-heading">Leaderboard Legends</Paragraph>
      </div>
      <div className="stat">
        <p>😂</p>
        <Heading className="heading">1M</Heading>
        <Paragraph className="sub-heading">Laughs Generated</Paragraph>
      </div>
    </StatsSection>
  );
};

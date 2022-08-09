import { Prototypes, YourIdeas } from "./extraCards";

export const OptionalExtraCard = ({ mapIndex }) => {
  if (mapIndex === 3) return <Prototypes />;
  if (mapIndex === 6) return <YourIdeas />;
  return null;
};

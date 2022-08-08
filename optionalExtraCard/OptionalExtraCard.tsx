import { Prototypes, YourIdeas } from "./extraCards";

export const OptionalExtraCard = ({ mapIndex }) => {
  if (mapIndex === 0) return <Prototypes />;
  if (mapIndex === 2) return <YourIdeas />;
  return null;
};

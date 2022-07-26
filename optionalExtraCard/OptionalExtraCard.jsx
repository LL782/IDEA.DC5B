import { YourIdeas } from "./extraCards";

export const OptionalExtraCard = ({ mapIndex }) =>
  mapIndex === 2 ? <YourIdeas /> : null;

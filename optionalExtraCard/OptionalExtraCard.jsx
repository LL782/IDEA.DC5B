import { ExtraCardYourIdeas } from "./extraCards";

export const OptionalExtraCard = ({ mapIndex }) =>
  mapIndex === 2 ? <ExtraCardYourIdeas /> : null;

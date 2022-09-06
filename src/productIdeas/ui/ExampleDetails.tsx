import { Idea } from "../businessLogic/Idea";
import { Details } from "./Details";

export const example: Idea = {
  alt: "testAlt",
  description: "testDescription",
  id: "testId",
  image: "/testImage",
  subTitle: "testSubTitle",
  title: "testTitle",
  type: "Test Idea Type",
};

export const ExampleIdeaDetails = () => <Details idea={example} />;

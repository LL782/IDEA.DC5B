import { Idea } from "@types";
import { Details } from "./Details";

export const exampleIdea: Idea = {
  alt: "testAlt",
  description: "testDescription",
  id: "testId",
  image: "/testImage",
  subTitle: "testSubTitle",
  title: "testTitle",
  type: "Test Idea Type",
};

export const ExampleIdeaDetails = () => <Details idea={exampleIdea} />;

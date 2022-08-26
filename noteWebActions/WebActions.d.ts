import { instanceTypes } from "./instanceTypes";

export type WebAction =
  | (CommonDetails & ClickButton)
  | (CommonDetails & HoverButton)
  | (CommonDetails & HoverImage)
  | (CommonDetails & IntersectButton)
  | (CommonDetails & IntersectImage)
  | (CommonDetails & ViewPage);

export type BaseWebAction =
  | ClickButton
  | HoverButton
  | HoverImage
  | IntersectButton
  | IntersectImage
  | ViewPage;

export type CommonDetails = {
  actionId: string;
  dateTime: string;
  instanceId: string;
  instanceType: ValueOf<instanceTypes>;
  pageTitle: string;
  pageType: "Idea Details";
  pageUrl: string;
  referrer: string;
  scrollX: number;
  scrollY: number;
  viewportHeight: number;
  viewportWidth: number;
};

type ClickButton = {
  action: "Click button";
  buttonName: string;
};

type HoverButton = {
  action: "Hover button";
  buttonName: string;
};

type HoverImage = {
  action: "Hover image";
  imageName: string;
};

type IntersectButton = {
  action: "Intersect button";
  buttonName: string;
};

type IntersectImage = {
  action: "Intersect image";
  imageName: string;
};

type ViewPage = {
  action: "View page";
};

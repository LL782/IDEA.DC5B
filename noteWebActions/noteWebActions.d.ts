type WebAction =
  | (CommonDetails & ClickButton)
  | (CommonDetails & HoverButton)
  | (CommonDetails & HoverImage)
  | (CommonDetails & IntersectButton)
  | (CommonDetails & IntersectImage)
  | (CommonDetails & ViewPage);

type CommonDetails = {
  actionId: string;
  dateTime: string;
  instanceId: string;
  instanceType: "new" | "localStorage";
  pageTitle: string;
  pageType: string;
  pageUrl: string;
  referrer: string;
  scrollPosition: string;
  viewportSize: string;
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

export type WebAction = CommonDetails & ClickButton;

export type BaseWebAction = ClickButton;

export type CommonDetails = {
  actionId: string;
  dateTime: string;
  instanceId: string;
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

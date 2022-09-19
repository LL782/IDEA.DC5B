type WebActionDocument = {
  documentId: string;
  actions: WebAction[];
};

type WebAction = CommonDetails & ClickButton;

type BaseWebAction = ClickButton;

type CommonDetails = {
  actionId: string;
  dateTime: string;
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

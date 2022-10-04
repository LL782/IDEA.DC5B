type WebActionDocument = {
  documentId: string;
  actions: WebAction[];
};

type WebAction = CommonDetails & BaseWebAction;

type BaseWebAction = ClickButton | PageView;

type CommonDetails = {
  actionId: string;
  dateTime: string;
  pageTitle: string;
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

type PageView = {
  action: "Page view";
};

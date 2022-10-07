import { uid } from "uid";

export function getCommonActionDetails() {
  const details: CommonDetails = {
    actionId: uid(),
    dateTime: new Date().toISOString(),
    pageTitle: document.title,
    pageType: "Idea Details",
    pageUrl: document.location.toString(),
    referrer: document.referrer,
    scrollX,
    scrollY,
    userAgent: navigator.userAgent,
    viewportHeight: innerHeight,
    viewportWidth: innerWidth,
  };
  return details;
}

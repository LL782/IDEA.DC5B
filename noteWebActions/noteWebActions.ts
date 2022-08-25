import { uid } from "uid";

import { BaseWebAction, CommonDetails, WebAction } from "./WebActions";

const LOCAL_STORAGE_KEY = "SHOP_DC5B_INTERACTIONS";

export function noteWebActions(input: BaseWebAction) {
  const newAction = { ...input, ...getCommonActionDetails() };
  const existingActions = getExistingData();
  existingActions.push(newAction);
  storageActions(existingActions);
}

function getExistingData() {
  const blankData = "[]";
  const data: WebAction[] = JSON.parse(
    window.localStorage.getItem(LOCAL_STORAGE_KEY) || blankData
  );
  return data;
}

function storageActions(actions: WebAction[]) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(actions));
}

function getCommonActionDetails() {
  const details: CommonDetails = {
    actionId: uid(),
    dateTime: new Date().toISOString(),
    instanceId: uid(),
    instanceType: "new",
    pageTitle: document.title,
    pageType: "Idea Details",
    pageUrl: document.location.toString(),
    referrer: document.referrer,
    scrollX,
    scrollY,
    viewportHeight: innerHeight,
    viewportWidth: innerWidth,
  };
  return details;
}

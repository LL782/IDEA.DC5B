import { uid } from "uid";

import { BaseWebAction, CommonDetails } from "../businessLogic/WebActions";

import { WebAction } from "../../webActions/businessLogic/WebActions";
import { storeViaApi } from "../storeViaApi";

export const LOCAL_STORAGE_KEY = "SHOP_DC5B_INTERACTIONS";

export async function noteWebActions(input: BaseWebAction) {
  const newAction = { ...input, ...getCommonActionDetails() };
  const existingActions = getExistingData();
  existingActions.push(newAction);
  storeActions(existingActions);
  await storeViaApi(existingActions);
  resetActions();
}

function getExistingData() {
  const blankData = "[]";
  const data: WebAction[] = JSON.parse(
    window.localStorage.getItem(LOCAL_STORAGE_KEY) || blankData
  );
  return data;
}

function resetActions() {
  const latestActions = getExistingData().splice(-3);
  storeActions(latestActions);
}

function storeActions(actions: WebAction[]) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(actions));
}

function getCommonActionDetails() {
  const { instanceId } = getInstance();
  const details: CommonDetails = {
    actionId: uid(),
    dateTime: new Date().toISOString(),
    instanceId,
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

function getInstance() {
  const existingInstance = getExistingData();
  if (
    existingInstance.length > 0 &&
    existingInstance[existingInstance.length - 1].instanceId
  ) {
    return {
      instanceId: existingInstance[0].instanceId,
    };
  }
  return {
    instanceId: uid(),
  };
}

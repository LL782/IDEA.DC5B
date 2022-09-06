import { uid } from "uid";

import { BaseWebAction, CommonDetails } from "./WebActions";
import { instanceTypes } from "./instanceTypes";

import { WebAction } from "webActions/WebActions";

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
  const { instanceId, instanceType } = getInstance();
  const details: CommonDetails = {
    actionId: uid(),
    dateTime: new Date().toISOString(),
    instanceId,
    instanceType,
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
      instanceType: instanceTypes.LOCAL,
    };
  }
  return {
    instanceId: uid(),
    instanceType: instanceTypes.NEW,
  };
}

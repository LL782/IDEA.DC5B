import { uid } from "uid";

import { storeViaApi } from "./storeViaApi";

export const LOCAL_STORAGE_KEY = "SHOP_DC5B_INTERACTIONS";

export async function noteWebActions(input: BaseWebAction) {
  const newAction = { ...input, ...getCommonActionDetails() };
  const doc = getActionsDocument();
  doc.actions.push(newAction);
  storeActions(doc);
  const { data, error } = await storeViaApi(doc);
  if (data) console.log("data: ", data);
  if (error) console.error("error: ", error);
}

function getActionsDocument() {
  const newDoc = JSON.stringify({ documentId: uid(), actions: [] });
  const existingDoc = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  const data: WebActionDocument = JSON.parse(existingDoc || newDoc);
  return data;
}

function storeActions(doc: WebActionDocument) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(doc));
}

function getCommonActionDetails() {
  const details: CommonDetails = {
    actionId: uid(),
    dateTime: new Date().toISOString(),
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

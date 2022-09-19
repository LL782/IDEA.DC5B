import { createNewWebActionsDocument } from "./createNewWebActionsDocument";

export const LOCAL_STORAGE_KEY = "SHOP_DC5B_INTERACTIONS";

export function storeLocally(newAction: WebAction) {
  const doc = getActionsDocument();
  doc.actions.push(newAction);
  storeActions(doc);
  return doc;
}

function getActionsDocument() {
  const newDoc = createNewWebActionsDocument();
  let existingDoc;
  try {
    existingDoc = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error(error);
  }
  const data: WebActionDocument = existingDoc
    ? JSON.parse(existingDoc)
    : newDoc;
  return data;
}

function storeActions(doc: WebActionDocument) {
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(doc));
  } catch (error) {
    console.error(error);
  }
}

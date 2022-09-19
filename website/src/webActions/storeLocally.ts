import { createNewWebActionsDocument } from "./createNewWebActionsDocument";

export const LOCAL_STORAGE_KEY = "DC5B_WEB_ACTIONS";

export function storeLocally(newAction: WebAction) {
  const doc = getActionsDocument();
  doc.actions.push(newAction);
  storeActionsDoc(doc);
  return doc;
}

type Data = { documentId: string; actionIds: string[] };

export function syncLocalStorage({ documentId, actionIds }: Data) {
  if (!documentId && !actionIds) {
    return;
  }

  const doc = getActionsDocument();
  const reducedActions = doc.actions.filter(
    (a) => !actionIds.includes(a.actionId)
  );
  doc.actions = reducedActions;
  doc.documentId = doc.documentId || documentId;

  storeActionsDoc(doc);
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

function storeActionsDoc(doc: WebActionDocument) {
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(doc));
  } catch (error) {
    console.error(error);
  }
}

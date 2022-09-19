import { uid } from "uid";

export function createNewWebActionsDocument() {
  return { documentId: uid(), actions: [] };
}

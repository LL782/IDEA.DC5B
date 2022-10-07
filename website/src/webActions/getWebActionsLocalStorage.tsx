import { LOCAL_STORAGE_KEY } from "./storeLocally";

export function getWebActionsLocalStorage() {
  const result = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(result || "[]");
}

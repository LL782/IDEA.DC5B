const LOCAL_STORAGE_KEY = "SHOP_DC5B_INTERACTIONS";

type WebAction = { action: string };
type WebActionsData = Array<WebAction>;

const initialState = "[]";

export function noteWebActions(input: { action: string }) {
  const localData: WebActionsData = JSON.parse(
    window.localStorage.getItem(LOCAL_STORAGE_KEY) || initialState
  );

  localData.push({ action: input.action });

  window.localStorage.setItem(
    "SHOP_DC5B_INTERACTIONS",
    JSON.stringify(localData)
  );
}

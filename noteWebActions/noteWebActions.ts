export function noteWebActions(arg0: { action: string }) {
  window.localStorage.setItem(
    "SHOP_DC5B_INTERACTIONS",
    JSON.stringify([{ action: "click button" }])
  );
}

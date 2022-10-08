import { getCommonActionDetails } from "./getCommonActionDetails";
import { syncLocalStorage, storeLocally } from "./storeLocally";
import { storeViaApi } from "./storeViaApi";

export async function noteWebActions(input: BaseWebAction, forLater?: true) {
  const newAction = { ...input, ...getCommonActionDetails() };
  const doc = storeLocally(newAction);
  if (forLater) {
    return;
  }
  await storeViaApi(doc).then(syncLocalStorage);
}

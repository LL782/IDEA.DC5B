import { getCommonActionDetails } from "./getCommonActionDetails";
import { storeLocally } from "./storeLocally";
import { storeViaApi } from "./storeViaApi";

export async function noteWebActions(input: BaseWebAction) {
  const newAction = { ...input, ...getCommonActionDetails() };
  const doc = storeLocally(newAction);
  await storeViaApi(doc);
}

import { disallowed } from "./dataManagement/disallowed";

export const storeViaApi = async (doc: WebActionDocument) => {
  if (disallowed(doc)) {
    return {};
  }
  try {
    const response = await fetch("/api/web-actions", {
      method: "POST",
      body: JSON.stringify(doc),
    });
    return await response.json();
  } catch (error) {
    console.error("error: ", error);
    return {};
  }
};

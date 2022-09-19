export const storeViaApi = async (doc: WebActionDocument) => {
  try {
    const response = await fetch("/api/web-actions", {
      method: "POST",
      body: JSON.stringify(doc),
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};

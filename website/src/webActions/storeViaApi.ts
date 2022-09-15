import { WebAction } from "./businessLogic/WebActions";

export const storeViaApi = async (actions: WebAction[]) => {
  try {
    const response = await fetch("/api/web-actions", {
      method: "POST",
      body: JSON.stringify(actions),
    });
    const { result: id } = await response.json();
    return id;
  } catch (error) {
    console.error(error);
  }
};

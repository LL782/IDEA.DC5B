export const read = () => {
  fetch("/api/test-db-connection");
};

export const write = () => {
  fetch("/api/test-db-connection", { method: "POST" });
};

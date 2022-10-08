export function disallowed(doc: WebActionDocument): boolean {
  return (
    doc.actions[0].userAgent.includes("checklyhq.com") ||
    doc.actions[0].userAgent.includes("Vercelbot")
  );
}

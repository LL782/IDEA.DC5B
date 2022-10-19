export function disallowed(doc: WebActionDocument): boolean {
  const userAgent = doc?.actions[0]?.userAgent;

  if (!userAgent) {
    return false;
  }

  return userAgent.includes("checklyhq.com") || userAgent.includes("Vercelbot");
}

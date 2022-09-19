import { rest } from "msw";

export const handlers = [
  rest.post("/api/web-actions", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

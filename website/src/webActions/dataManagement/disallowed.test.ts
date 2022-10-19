/* eslint-disable @typescript-eslint/ban-ts-comment */
import { dummyWebAction } from "../_tests/dummyData";
import { disallowed } from "./disallowed";

describe("disallowed", () => {
  test("does NOT disallow actions for an empty document", () => {
    expect(
      disallowed({
        documentId: "",
        actions: [],
      })
    ).toBeFalsy();
  });
  test("handles missing userAgent properties (from old actions)", () => {
    const oldAction = dummyWebAction;
    // @ts-ignore
    delete oldAction.userAgent;
    expect(
      disallowed({
        documentId: "",
        // @ts-ignore
        actions: [dummyWebAction],
      })
    ).toBeFalsy();
  });
  test.each(["checklyhq.com", "Vercelbot"])(
    "disallows bots that we know about - %s",
    (s) => {
      expect(
        disallowed({
          documentId: "",
          actions: [
            {
              ...dummyWebAction,
              userAgent: s,
            },
          ],
        })
      ).toBeTruthy();
    }
  );
});

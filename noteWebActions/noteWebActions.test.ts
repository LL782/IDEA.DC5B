import "@testing-library/react";
import { noteWebActions } from "./noteWebActions";

describe("noteWebActions", () => {
  describe("Given a browser that supports localstorage", () => {
    describe("When triggered with a button click", () => {
      beforeEach(() => {
        noteWebActions({ action: "click button" });
      });
      it('notes the "click button" action', () => {
        expect(
          JSON.parse(
            window.localStorage.getItem("SHOP_DC5B_INTERACTIONS") || null
          )
        ).toEqual([{ action: "click button" }]);
      });
    });
  });
});

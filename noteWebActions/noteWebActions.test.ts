import "@testing-library/react";
import { noteWebActions } from "./noteWebActions";

describe("noteWebActions", () => {
  describe("Given a browser that supports localstorage", () => {
    describe("When triggered with a page view", () => {
      beforeEach(() => {
        noteWebActions({ action: "viewPage" });
      });
      it('notes the "page view" action', () => {
        expect(
          JSON.parse(
            window.localStorage.getItem("SHOP_DC5B_INTERACTIONS") || ""
          )
        ).toEqual([{ action: "viewPage" }]);
      });
    });
  });
  describe("and then a button click", () => {
    beforeEach(() => {
      noteWebActions({ action: "clickButton" });
    });
    it('notes the "click button" action following the page view', () => {
      expect(
        JSON.parse(window.localStorage.getItem("SHOP_DC5B_INTERACTIONS") || "")
      ).toEqual([{ action: "viewPage" }, { action: "clickButton" }]);
    });
  });
});

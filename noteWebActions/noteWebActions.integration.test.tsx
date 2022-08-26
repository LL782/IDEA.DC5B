import { fireEvent, render, screen } from "@testing-library/react";
import { uid } from "uid";

import type { Idea } from "@types";
import { WebAction } from "./WebActions";
import { instanceTypes } from "./instanceTypes";
import { IdeaDetails } from "../ideaDetails";

const testIdea: Idea = {
  alt: "testAlt",
  description: "testDescription",
  id: "testId",
  image: "/testImage",
  subTitle: "testSubTitle",
  title: "testTitle",
  type: "Test Idea Type",
};

const takeActions = () => {
  render(<IdeaDetails idea={testIdea} />);
  const addToBag = screen.getByRole("button", { name: "Add to bag" });
  fireEvent.click(addToBag);
  fireEvent.click(addToBag);
};

function getOurLocalStorage() {
  return JSON.parse(
    window.localStorage.getItem("SHOP_DC5B_INTERACTIONS") || ""
  );
}

const testDate = new Date("2020-01-01");
jest.useFakeTimers().setSystemTime(testDate);

const TEST_UID_1 = "TEST_UID_1";
const TEST_UID_2 = "TEST_UID_2";
const TEST_UID_3 = "TEST_UID_3";

jest.mock("uid");
const mockedUid = jest.mocked(uid);
mockedUid
  .mockReturnValueOnce(TEST_UID_1)
  .mockReturnValueOnce(TEST_UID_2)
  .mockReturnValueOnce(TEST_UID_3);

const testTitle = "testTitle";
document.title = testTitle;

const TEST_DATE_STRING = testDate.toISOString();
const TEST_VIEWPORT_HEIGHT = 768;
const TEST_VIEWPORT_WIDTH = 1024;

const firstClick: WebAction = {
  action: "Click button",
  actionId: TEST_UID_2,
  buttonName: `Add to bag :: ${testIdea.id}`,
  dateTime: TEST_DATE_STRING,
  instanceId: TEST_UID_1,
  instanceType: instanceTypes.NEW,
  pageTitle: testTitle,
  pageType: "Idea Details",
  pageUrl: "https://test.url/",
  referrer: "",
  scrollY: 0,
  scrollX: 0,
  viewportHeight: TEST_VIEWPORT_HEIGHT,
  viewportWidth: TEST_VIEWPORT_WIDTH,
};

const secondClick = {
  ...firstClick,
  actionId: TEST_UID_3,
  instanceType: instanceTypes.LOCAL,
};

const expectedResults = [firstClick, secondClick];

describe("Web Actions", () => {
  describe("When I view the test idea and then click 'Add to bag'", () => {
    beforeAll(takeActions);
    test("details of the interactions get stored on the customer's computer", () => {
      expect(getOurLocalStorage()).toEqual(expectedResults);
    });
  });
});
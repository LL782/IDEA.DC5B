import { fireEvent, render, screen } from "@testing-library/react";
import { uid } from "uid";

import { ExampleProductDetails } from "../productIdeas/_example";
import { LOCAL_STORAGE_KEY } from "./noteWebActions";
import { BagToolkitProvider } from "../shoppingBag/BagToolkit";
import { exampleProduct } from "../productIdeas/data/ideas/ideas.dev";

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
  actionId: TEST_UID_1,
  buttonName: `Add to bag :: ${exampleProduct.id}`,
  dateTime: TEST_DATE_STRING,
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
};

const expectedResults = {
  documentId: TEST_UID_2,
  actions: [firstClick, secondClick],
};

describe("Web Actions", () => {
  render(
    <BagToolkitProvider>
      <ExampleProductDetails />
    </BagToolkitProvider>
  );

  describe("Given a customer with no data stored on their browser", () => {
    describe("When 'Add to bag' is clicked twice", () => {
      beforeEach(() => {
        const addToBag = screen.getByRole("button", { name: "Add to bag" });
        fireEvent.click(addToBag);
        fireEvent.click(addToBag);
      });
      test("the details are stored in a single object on the customer's browser", () => {
        expect(getOurLocalStorage()).toEqual(expectedResults);
      });
    });
  });
});

function getOurLocalStorage() {
  const result = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(result || "[]");
}

import { fireEvent, render, screen } from "@testing-library/react";
import { uid } from "uid";

import { ExampleProductDetails } from "../../productIdeas/_example";
import { BagToolkitProvider } from "../../shoppingBag/BagToolkit";
import { exampleProduct } from "../../productIdeas/data/ideas/ideas.dev";
import { TEST_UID_1, TEST_UID_2, dummyWebAction } from "./dummyData";
import { getWebActionsLocalStorage } from "../getWebActionsLocalStorage";

const mockedUid = jest.mocked(uid);
jest.mock("uid");
mockedUid.mockReturnValueOnce(TEST_UID_1).mockReturnValueOnce(TEST_UID_2);

const firstClick: WebAction = {
  ...dummyWebAction,
  action: "Click button",
  buttonName: `Add to bag :: ${exampleProduct.id}`,
};

const secondClick = {
  ...firstClick,
  actionId: TEST_UID_2,
};

const expectedResults = {
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
        expect(getWebActionsLocalStorage()).toEqual(expectedResults);
      });
    });
  });
});

import { render } from "@testing-library/react";
import { uid } from "uid";
import { getWebActionsLocalStorage } from "../getWebActionsLocalStorage";
import { testDate, TEST_UID_1, testTitle, dummyWebAction } from "./dummyData";
import { NotePageView } from "../NotePageView";

jest.useFakeTimers().setSystemTime(testDate);
jest.mock("uid");
const mockedUid = jest.mocked(uid);
mockedUid.mockReturnValueOnce(TEST_UID_1);

describe("NotePageViews", () => {
  test("Adds a page view action to the web actions store", () => {
    document.title = testTitle;
    render(<NotePageView component={() => null} />);
    expect(getWebActionsLocalStorage()).toEqual({
      actions: [{ ...dummyWebAction, action: "Page view" }],
    });
  });
});

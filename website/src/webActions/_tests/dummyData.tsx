import { uid } from "uid";

export const TEST_UID_1 = "TEST_UID_1";
export const TEST_UID_2 = "TEST_UID_2";

jest.mock("uid");
const mockedUid = jest.mocked(uid);
mockedUid.mockReturnValueOnce(TEST_UID_1).mockReturnValueOnce(TEST_UID_2);

export const testDate = new Date("2020-01-01");
export const TEST_DATE_STRING = testDate.toISOString();
jest.useFakeTimers().setSystemTime(testDate);

export const testTitle = "testTitle";
document.title = testTitle;

export const TEST_VIEWPORT_HEIGHT = 768;
export const TEST_VIEWPORT_WIDTH = 1024;

export const dummyWebAction: WebAction = {
  action: "Page view",
  actionId: TEST_UID_1,
  dateTime: TEST_DATE_STRING,
  pageTitle: testTitle,
  pageUrl: "https://test.url/",
  referrer: "",
  scrollX: 0,
  scrollY: 0,
  userAgent:
    "Mozilla/5.0 (darwin) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/19.0.0",
  viewportHeight: TEST_VIEWPORT_HEIGHT,
  viewportWidth: TEST_VIEWPORT_WIDTH,
};

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",

    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  moduleFileExtensions: ["js", "d.ts", "ts", "tsx", "json", "node"],
  testEnvironment: "jest-environment-jsdom",
  testEnvironmentOptions: { url: "https://test.url" },
};

module.exports = createJestConfig(customJestConfig);

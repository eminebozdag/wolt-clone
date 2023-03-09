module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	moduleDirectories: ["node_modules", "src"],
	setupFiles: ["<rootDir>/src/setupTests.js"],
	collectCoverage: true,
	mapCoverage: true,
	coverageDirectory: "<rootDir>/cov/",
	coveragePathIgnorePatterns: ["node_modules", "<rootDir>/src/pages/page.config.ts"],
};

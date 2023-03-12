module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
	collectCoverage: true,
	coverageDirectory: "<rootDir>/cov/",
	coveragePathIgnorePatterns: ["src", "node_modules"],
	moduleDirectories: ["src", "node_modules"],
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
	},
};

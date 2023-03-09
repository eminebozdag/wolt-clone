import {render, screen} from "@testing-library/react";
import React from "react";
import DownloadApp from "../../../pages/home/download-app";

describe("<DownloadApp/>", () => {
	it("should render successfully", () => {
		//Arrange

		//Act
		render(<DownloadApp />);

		//Assert
		expect(screen.getByTestId("download-app-component")).not.toBeNull();
		expect(screen.getByTestId("container-component")).not.toBeNull();
		expect(screen.getByAltText("front-cell")).not.toBeNull();
		expect(screen.getByTestId("apple-store-icon")).not.toBeNull();
		expect(screen.getByTestId("google-play-store-icon")).not.toBeNull();
	});

	it("test the height", () => {
		//Arrange

		//Act
		jest.spyOn(window.screen, "width", "get").mockReturnValue(639);
		render(<DownloadApp />);

		//Assert
		expect(screen.getByAltText("front-cells-mobile")).not.toBeNull();
	});
});

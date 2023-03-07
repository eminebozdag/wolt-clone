import {render, screen, within} from "@testing-library/react";
import Footer from "../../../src/components/footer/footer";

describe("<Footer/>", () => {
	it("should render successfully", () => {
		//Arrange

		//Act
		render(<Footer />);

		//Assert
		expect(screen.getByTestId("footer-component")).not.toBeNull();
		expect(screen.getByTestId("wolt-logo")).not.toBeNull();
		expect(screen.getByTestId("apple-store-icon")).not.toBeNull();
		expect(screen.getByTestId("google-play-store-icon")).not.toBeNull();

		const buttonsInFooter = within(screen.getByTestId("footer-component")).getAllByTestId("button-component");
		expect(buttonsInFooter.length).toBe(7);
	});
});

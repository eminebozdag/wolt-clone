describe("Home for Web", () => {
	beforeEach(() => {
		cy.viewport("macbook-16");
		cy.visit("/");
	});

	it("should render without crashing", () => {
		//Arrange

		//Act

		//Assert
		cy.get('[data-testid="home-banner-component"]').should("exist");
		cy.get('[data-testid="countries-component"]').should("exist");
		cy.get('[data-testid="video-section-component"]').should("exist");
		cy.get('[data-testid="title-component"]').should("exist");
		cy.get('[data-testid="download-app-component"]').should("exist");
		cy.get('[data-testid="container-component"]').should("exist");
	});

	it("should open modal when click login button, type correct input, submit form so close modal", () => {
		//Arrange
		cy.contains("Log in").should("be.visible");

		//Act
		cy.contains("Log in").click();
		cy.get('[data-testid="form-component"]').find('[data-testid="search-input"]').type("eminebozdag@wolt.com");
		cy.contains("Next").click();
		cy.get('[data-testid="message-span"]').should("have.text", "Please check your mailbox!");
		cy.get('[aria-label="close"]').click();

		//Assert
		cy.get('[data-testid="login-modal-component"]').should("not.exist");
	});

	it("should open modal when click login button, type wrong input, can not submit form, so close modal", () => {
		//Arrange
		cy.contains("Log in").should("be.visible");

		//Act
		cy.contains("Log in").click();
		cy.get('[data-testid="form-component"]').find('[data-testid="search-input"]').type("eminebozdagwolt.com");
		cy.get('[data-testid="message-span"]').should("have.text", "Please enter a valid email.");
		cy.get('[aria-label="close"]').click();

		//Assert
		cy.get('[data-testid="login-modal-component"]').should("not.exist");
	});

	it("should open modal when click signup button, type correct input, submit form so close modal", () => {
		//Arrange
		cy.contains("Log in").should("be.visible");

		//Act
		cy.contains("Sign up").click();
		cy.get('[data-testid="form-component"]').find('[data-testid="search-input"]').type("eminebozdag@wolt.com");
		cy.contains("Next").click();
		cy.get('[data-testid="message-span"]').should("have.text", "Please check your mailbox!");
		cy.get('[aria-label="close"]').click();

		//Assert
		cy.get('[data-testid="login-modal-component"]').should("not.exist");
	});

	it("should open modal when click signup button, type wrong input, can not submit form, so close modal", () => {
		//Arrange
		cy.contains("Sign up").should("be.visible");

		//Act
		cy.contains("Log in").click();
		cy.get('[data-testid="form-component"]').find('[data-testid="search-input"]').type("eminebozdagwolt.com");
		cy.contains("Next").click();
		cy.get('[data-testid="message-span"]').should("have.text", "Please enter a valid email.");
		cy.get('[aria-label="close"]').click();

		//Assert
		cy.get('[data-testid="login-modal-component"]').should("not.exist");
	});
});

describe("Home for Mobile", () => {
	beforeEach(() => {
		cy.viewport("iphone-6");
		cy.visit("/");
	});

	it("should render without crashing", () => {
		//Arrange

		//Act

		//Assert
		cy.get('[data-testid="home-banner-component"]').should("exist");
		cy.get('[data-testid="countries-component"]').should("exist");
		cy.get('[data-testid="video-section-component"]').should("exist");
		cy.get('[data-testid="title-component"]').should("exist");
		cy.get('[data-testid="download-app-component"]').should("exist");
		cy.get('[data-testid="container-component"]').should("exist");
	});

	it("should open modal, type correct input, submit form so close modal", () => {
		//Arrange
		cy.get('[data-testid="popover-button"]').should("be.visible");

		//Act
		cy.get('[data-testid="popover-button"]').click();
		cy.contains("Login or register").should("be.visible");
		cy.contains("Login or register").click();
		cy.get('[data-testid="login-modal-component"]').should("exist");
		cy.get('[data-testid="form-component"]').find('[data-testid="search-input"]').type("eminebozdag@wolt.com");
		cy.contains("Next").click();
		cy.get('[data-testid="message-span"]').should("have.text", "Please check your mailbox!");
		cy.get('[aria-label="close"]').click();

		//Assert
		cy.get('[data-testid="login-modal-component"]').should("not.exist");
	});

	it("should open modal, type wrong input, can not submit form, so close modal", () => {
		//Arrange
		cy.get('[data-testid="popover-button"]').should("be.visible");

		//Act
		cy.get('[data-testid="popover-button"]').click();
		cy.contains("Login or register").should("be.visible");
		cy.contains("Login or register").click();
		cy.get('[data-testid="login-modal-component"]').should("exist");
		cy.get('[data-testid="form-component"]').find('[data-testid="search-input"]').type("eminebozdagwolt.com");
		cy.contains("Next").click();
		cy.get('[data-testid="message-span"]').should("have.text", "Please enter a valid email.");
		cy.get('[aria-label="close"]').click();

		//Assert
		cy.get('[data-testid="login-modal-component"]').should("not.exist");
	});
});

export {};

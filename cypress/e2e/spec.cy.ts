describe("ComponentToTest", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("should render without crashing", () => {
		cy.get('div[data-testid="home-banner-component"]').should("exist");
		cy.get('div[data-testid="countries-component"]').should("exist");
		cy.get('div[data-testid="video-section-component"]').should("exist");
		cy.get('div[data-testid="title-component"]').should("exist");
		cy.get('div[data-testid="download-app-component"]').should("exist");
		cy.get('div[data-testid="container-component"]').should("exist");
	});

	it("should trigger modal", () => {
		cy.contains("Log in").should("exist");
	});
});

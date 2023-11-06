describe(`Logout`, () => {
  it("can log out", () => {
    cy.login();
    cy.wait(2000);
    cy.get(".logout-btn").click();
  });
});

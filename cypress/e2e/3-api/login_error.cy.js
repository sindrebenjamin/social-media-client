describe("https://sindrebenjamin.github.io/social-media-client", () => {
  it("can't login with invalid credentials and is shown an error message", () => {
    cy.visit("https://sindrebenjamin.github.io/social-media-client")
      .wait(1000)
      .get(".login-btn")
      .click();

    cy.get("#loginEmail")
      .invoke("val", "sindbert99@stud.noroff.no")
      .should("have.value", "sindbert99@stud.noroff.no");

    cy.get("#loginPassword").invoke("val", "123456789");

    cy.get("#login-btn").click();

    cy.on("window:alert", (message) => {
      expect(message).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});

describe("Login", () => {
  it("can login and access their profile", () => {
    cy.visit("https://sindrebenjamin.github.io/social-media-client")
      .wait(1000)
      .get(".login-btn")
      .click();

    cy.get("#loginEmail")
      .invoke("val", "sindbert99@stud.noroff.no")
      .should("have.value", "sindbert99@stud.noroff.no");

    cy.get("#loginPassword").invoke("val", "12345678");

    cy.get("#login-btn").click();
  });
});

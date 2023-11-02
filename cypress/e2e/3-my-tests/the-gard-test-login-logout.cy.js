describe("Login and log out test", () => {
  it("Login and log out test", () => {
    cy.visit("https://ca-js2.netlify.app/");
    cy.get("#input-email").type("haugland@noroff.no", { delay: 150 });
    cy.get("#input-password").type("my-password{enter}", { delay: 150 });
    cy.url().should("include", "/public/feed/");
    cy.wait(1000);
    cy.get("#logout").click();
    cy.wait(1000);
    cy.url().should("include", "login.html");
  });
});

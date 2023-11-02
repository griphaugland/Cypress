describe("Check with correct password", () => {
  const randomString = Math.floor(Math.random() * 1000) + "randomusername";
  it("Login test", () => {
    cy.visit("https://ca-js2.netlify.app/");
    cy.get("#input-email").type("haugland@noroff.no", { delay: 150 });
    cy.get("#input-password").type("my-password{enter}", { delay: 150 });
    cy.url().should("include", "/public/feed/");
  });
});
describe("Register", () => {
  const randomString = Math.floor(Math.random() * 1000) + "randomusername";
  it("Register test", () => {
    cy.visit("https://ca-js2.netlify.app/");
    cy.get(".fw-lighter:nth-of-type(1)").click();
    cy.get("#validationCustomName").type(`${randomString}`, {
      delay: 150,
    });
    cy.get("#validationCustomUsername").type(`${randomString}@noroff.no`, {
      delay: 150,
    });
    cy.get("#validationCustomPassword").type(`${randomString}{enter}`, {
      delay: 150,
    });
    cy.url().should("include", "/public/feed/");
  });
});

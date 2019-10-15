import { exportAllDeclaration } from "@babel/types";

//TODO: change link to heroku
describe("Testing advertisement management", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000");
    cy.get("#login").click();
    cy.get("#email")
      .type("admin@email.com")
      .should("have.value", "admin@email.com");
    cy.get("#password")
      .type("123456")
      .should("have.value", "123456");
    cy.get("#login").click();
    cy.location("pathname", { timeout: 30000 }).should("include", "/post");
    cy.wait(5000);
    cy.get("#mainMenu").click();
    cy.get("#adsBtn").click();
  });

  describe("Testing create new advertisement", function() {
    it("Create new advertisement with empty name", function() {
      cy.get("#newAdBtn").click();
      cy.wait(3000);
      cy.get("#link")
        .type("http://www.randomlink.com")
        .should("have.value", "http://www.randomlink.com");
      cy.get("#submitBtn").click();
      cy.wait(3000);
      cy.get("#errorMsg").should("be.visible");
    });
    it("Create new advertisement with empty link", function() {
      cy.get("#newAdBtn").click();
      cy.wait(3000);
      cy.get("#name")
        .type("randomName")
        .should("have.value", "randomName");
      cy.get("#submitBtn").click();
      cy.wait(3000);
      cy.get("#errorMsg").should("be.visible");
    });
    it("Create new advertisement with valid input", function() {
      cy.get("#newAdBtn").click();
      cy.wait(3000);
      cy.get("#name")
        .type("test")
        .should("have.value", "test");
      cy.get("#link")
        .type("test")
        .should("have.value", "test");
      cy.get("#submitBtn").click();
      cy.on("window:confirm", str => {
        expect(str).to.eq("New advertisement created successfully.");
      });
    });
  });
});

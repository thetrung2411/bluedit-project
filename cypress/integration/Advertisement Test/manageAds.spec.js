import { exportAllDeclaration } from "@babel/types";
describe("Testing advertisement management", function() {
  beforeEach(function() {
    cy.visit("https://asd-bluedit.herokuapp.com/home");
    cy.get("#closeBtn").click();
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
        .type("https://asd-bluedit.herokuapp.com/home")
        .should("have.value", "https://asd-bluedit.herokuapp.com/home");
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
        .type("https://asd-bluedit.herokuapp.com/home")
        .should("have.value", "https://asd-bluedit.herokuapp.com/home");
      cy.get("#submitBtn").click();
      cy.on("window:confirm", str => {
        expect(str).to.eq("New advertisement created successfully.");
      });
      cy.wait(3000);
    });
  });

  describe("Testing edit advertisement", function() {
    it("Edit advertisement with empty name", function() {
      cy.get("#testEditBtn").click();
      cy.wait(3000);
      cy.get("#name").clear();
      cy.get("#submitBtn").click();
      cy.wait(3000);
      cy.get("#errorMsg").should("be.visible");
    });
    it("Edit advertisement with empty link", function() {
      cy.get("#testEditBtn").click();
      cy.wait(3000);
      cy.get("#link").clear();
      cy.get("#submitBtn").click();
      cy.wait(3000);
      cy.get("#errorMsg").should("be.visible");
    });
    it("Edit advertisement with valid input", function() {
      cy.get("#testEditBtn").click();
      cy.wait(3000);
      cy.get("#name")
        .clear()
        .type("edited")
        .should("have.value", "edited");
      cy.get("#link")
        .clear()
        .type("https://asd-bluedit.herokuapp.com/home")
        .should("have.value", "https://asd-bluedit.herokuapp.com/home");
      cy.get("#submitBtn").click();
      cy.wait(3000);
      cy.on("window:confirm", str => {
        expect(str).to.eq("Edited successfully");
      });
      cy.wait(3000);
    });
  });

  describe("Testing delete advertisement", function() {
    it("Delete advertisement", function() {
      cy.get("#editedDeleteBtn").click();
      cy.on("window:confirm", str => {
        expect(str).to.eq("Are you sure to delete this item? ");
      });
      cy.wait(3000);
    });
  });
});

import { isTSAnyKeyword } from "@babel/types";

describe("Testing advertisement management", function() {
  beforeEach(function() {
    cy.visit("https://asd-bluedit.herokuapp.com/home");
    cy.wait(5000);
  });

  it("Can change advertisement", function() {
    cy.get("#changeBtn").click();
  });

  it("Can close advertisement", function() {
    cy.get("#closeBtn").click();
  });
});

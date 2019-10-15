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

  describe("Testing edit advertisement", function() {
    //Note that the following code will test on the advertisement named 'test' only
    //which should have been created by the test cases above
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
        .type("test again")
        .should("have.value", "test again");
      cy.get("#link")
        .clear()
        .type("test link again")
        .should("have.value", "test link again");
      cy.get("#submitBtn").click();
      cy.wait(3000);
      cy.on("window:confirm", str => {
        expect(str).to.eq("Edited successfully");
      });
    });
  });
});

describe("Testing change password", function() {
  beforeEach(function() {
    cy.visit("https://asd-bluedit.herokuapp.com/home");
    cy.get("#login").click();
    cy.get("#email")
      .type("rathian@email.com")
      .should("have.value", "rathian@email.com");
    cy.get("#password")
      .type("123456789")
      .should("have.value", "123456789");
    cy.get("#login").click();
    cy.location("pathname", { timeout: 30000 }).should("include", "/post");
    cy.get("#mainMenu").click();
    cy.get("#menu-accountMan").click();
  });
  describe("Testing empty field and error message", function() {
    it("Empty new password field", function() {
      cy.get("#changeButton").click();
      cy.wait(3000);
    });
    it("Different/Empty confirm password", function() {
      cy.get("#newPassword")
        .type("123456")
        .should("have.value", "123456");
      cy.get("#changeButton").click();
      cy.wait(3000);
      cy.get("#confirmPassword")
        .type("incorrectpassword")
        .should("have.value", "incorrectpassword");
      cy.get("#changeButton").click();
      cy.wait(3000);
    });
  });

  describe("Change to password, logout and login with new password and change password back to original", function() {
    it("Change password, login with new password and reset password back to normal", function() {
      //change password and logout
      cy.get("#newPassword")
        .type("123456")
        .should("have.value", "123456");
      cy.get("#confirmPassword")
        .type("123456")
        .should("have.value", "123456");
      cy.get("#changeButton").click();
      cy.wait(3000);
      cy.get("#mainMenu").click();
      cy.get("#logout").click();

      cy.wait(1000);
      //login with new password
      cy.get("#login").click();
      cy.get("#email")
        .type("rathian@email.com")
        .should("have.value", "rathian@email.com");
      cy.get("#password")
        .type("123456")
        .should("have.value", "123456");
      cy.get("#login").click();
      cy.location("pathname", { timeout: 30000 }).should("include", "/post");
      cy.get("#mainMenu").click();
      cy.get("#menu-accountMan").click();

      //change password back to the old one
      cy.get("#newPassword")
        .type("123456789")
        .should("have.value", "123456789");
      cy.get("#confirmPassword")
        .type("123456789")
        .should("have.value", "123456789");
      cy.get("#changeButton").click();
      cy.wait(3000);
    });
  });
});

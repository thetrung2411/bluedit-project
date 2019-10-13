describe("Testing disable user", function() {
  beforeEach(function() {
    cy.visit("https://asd-bluedit.herokuapp.com/secretroute");
    cy.wait(3000);
    cy.visit("https://asd-bluedit.herokuapp.com/home");
    cy.get("#login").click();
    cy.get("#email")
      .type("teostra@email.com")
      .should("have.value", "teostra@email.com");
    cy.get("#password")
      .type("123456")
      .should("have.value", "123456");
    cy.get("#login").click();
    cy.location("pathname", { timeout: 30000 }).should("include", "/post");
    cy.wait(5000);
    cy.get("#mainMenu").click();
    cy.get("#menu-accountMan").click();
  });

  //note: if test fail, it is highly that the current account that being use
  //for testing is already disabled. To fix this, simply create a new account
  //and change the following parameter according to the newly created account.
  //where #email, type new email
  //where #password, type new password
  //where #confirm-statement, type new username there

  describe("Testing confirm field and disable button functionality", function() {
    it("Empty confirm field", function() {
      cy.get("#open-confirm-dialog").click();
      cy.get("#disable-account").should("be.disabled");
      cy.wait(3000);
    });
    it("Wrong username in confirm field", function() {
      cy.get("#open-confirm-dialog").click();
      cy.get("#confirm-statement")
        .type("Lunastra")
        .should("have.value", "Lunastra");
      cy.get("#disable-account").should("be.disabled");
      cy.wait(3000);
    });
    it("Correct username (char by char, upper and lowercase) in confirm field", function() {
      //char by char
      cy.get("#open-confirm-dialog").click();
      cy.get("#confirm-statement")
        .type("Teostra")
        .should("have.value", "Teostra");
      cy.get("#disable-account").should("not.be.disabled");
      cy.wait(3000);
      //all characters are lowercase
      cy.get("#confirm-statement").clear();
      cy.get("#confirm-statement")
        .type("teostra")
        .should("have.value", "teostra");
      cy.get("#disable-account").should("not.be.disabled");
      cy.wait(3000);
      //all characters are uppercasae
      cy.get("#confirm-statement").clear();
      cy.get("#confirm-statement")
        .type("TEOSTRA")
        .should("have.value", "TEOSTRA");
      cy.get("#disable-account").should("not.be.disabled");
      cy.wait(3000);
    });
  });

  describe("Disable account", function() {
    it("Disable account", function() {
      //disable accoount
      cy.get("#open-confirm-dialog").click();
      cy.get("#confirm-statement").clear();
      cy.get("#confirm-statement")
        .type("teostra")
        .should("have.value", "teostra");
      cy.get("#disable-account").click();
      cy.wait(5000);
      //attempt to login with disabled account
      cy.get("#login").click();
      cy.get("#email")
        .type("teostra@email.com")
        .should("have.value", "teostra@email.com");
      cy.get("#password")
        .type("123456")
        .should("have.value", "123456");
      cy.get("#login").click();
      cy.wait(2000);
    });
  });
});

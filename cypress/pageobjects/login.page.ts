/// <reference types="cypress" />

export class loginPage{
  login() {
		cy.log('created new user')
		return cy.visit("https://tconnecttestgreen.apos.tandemdiabetes.com/login.aspx");
	}

	fillEmailaddress(){
		return cy.get('#txtLoginEmailAddress').type("sftestaccount001@tandem-diabetes.com");
	}

	fillPassword(){
		return cy.get('#txtLoginPassword').type("tconnect");
	}

	signIn(){
		return cy.get('#linkLogin > div').click();
	}
	signOut(){
		return cy.get('#linkLogout').click();
	}
}
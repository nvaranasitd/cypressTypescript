/// <reference types="cypress" />

class loginPage{
  login(url) {
		// cy.log('created new user');
		return cy.visit(url);
	}

	fillEmailaddress(emailaddress: string){
		return cy.get('#txtLoginEmailAddress').type(emailaddress);
	}

	fillPassword(password: string){
		return cy.get('#txtLoginPassword').type(password);
	}

	signIn(){
		return cy.get('#linkLogin > div').click();
	}
	signOut(){
		return cy.get('#linkLogout').click();
	}
}

export default loginPage
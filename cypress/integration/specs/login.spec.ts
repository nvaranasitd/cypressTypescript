import { loginPage } from '../../pageobjects/login.page';
const loginpg = new loginPage();

describe( 'open the browser to', () => {
	it( 'login to the t:connect webapp successfully', () => {
		loginpg.login();
	} )
	describe( 'enter the emailaddress to sign in', () => {
		it( 'enter the emailaddress successfully', () => {
			loginpg.fillEmailaddress();
		} )
	} );

	describe( 'enter the password to sign in', () => {
		it( 'enter the password successfully', () => {
			loginpg.fillPassword();
		} )
	} );
	describe( 'sign in', () => {
		it( 'sign into the tconnect successfully', () => {
			loginpg.signIn();
		} )
	} );
	describe( 'sign out', () => {
		it( 'sign out of the tconnect webapp successfully', () => {
			loginpg.signOut();
		} )
	} );
} );

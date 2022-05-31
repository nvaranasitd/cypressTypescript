/// <reference types='cypress' />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
// Import additional layer for reusing pageobjects
import loginpage from '../../pageobjects/login.page';
let logpage = new loginpage();

Given('user is on t:Connect login page {string}', (url: string) => {
	logpage.login(url);
});

When('user enters emailaddress as {string}', (emailaddress: string) => {
    logpage.fillEmailaddress(emailaddress)
});

When('user enters password as {string}', (password: string) => {
    logpage.fillPassword(password)
});

When('user clicks on sign In button', () => {
    logpage.signIn()
});

Then('the user signs out', () => {
   logpage.signOut()
});
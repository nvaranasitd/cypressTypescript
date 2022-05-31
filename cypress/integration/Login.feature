@PRS:prs-id
Feature: Login functionality

    This feature validates the login functionality for the t:connect app
 			
    Scenario: User shall login with valid credentials
				Given user is on t:Connect login page "https://tconnecttestgreen.apos.tandemdiabetes.com/login.aspx"
        When user enters emailaddress as "sftestaccount001@tandem-diabetes.com" 
				And user enters password as "tconnect"
				And user clicks on sign In button
        Then the user signs out
Feature: Login

Scenario: As a unauthenticated user, I want to login so I can view the dashboard

Given I am on the login page

When I enter my credentials

Then I should be navigated to the dashboard


Scenario: As a unauthenticated user, I should see an error message if I login with an unknown email address

Given I am on the login page

When I enter my credentials using an unknown email address

Then I should see an error message
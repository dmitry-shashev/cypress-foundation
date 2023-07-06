Feature: Test some home page

  Scenario: I can login
    Given I open the home page
    When I submit the login form
    Then I see my profile page
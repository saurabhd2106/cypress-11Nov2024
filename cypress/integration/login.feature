Feature: Login to conduit Application

  Background: Pre-requisite
    Given Saurabh is a writer and has access to the application

  Scenario: Verify login to the Application
    
    When Saurabh login with correct credentials
    Then Saurabh gets access to the application

  Scenario: Verify login to the Application with credentials
    When Saurabh uses his credentials as "testuser@test.com" and "testpassword"
    Then Saurabh gets access to the application


  Scenario: Verify login to the Application with credentials as list
    When Saurabh uses his credentials as
      | testuser@test.com |
      | testpassword      |
    Then Saurabh gets access to the application

  Scenario: Verify login to the Application with credentials as map
    When Saurabh uses his credentials as map
      | useremail         | userpassword |
      | testuser@test.com | testpassword |
    Then Saurabh gets access to the application

  Scenario Outline: Verify login to the Application with credentials as map
    When Saurabh uses his credentials as map
      | useremail   | userpassword   |
      | <useremail> | <userpassword> |
    Then Saurabh gets access to the application

    Examples:
      | useremail          | userpassword |
      | testuser@test.com  | testpassword |
      | testuser2@test.com | testpassword |

Feature: Signup UI automated feature for Lokalise QA task

  Background: Open signup page
    Given I am on the signup page

  Scenario Outline: User is able to signup to the website
    When User submits a valid registration form
    And User completes 2nd registration form
    Then User is successfully registered to the website
    And User can logout from the website


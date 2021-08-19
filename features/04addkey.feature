Feature: Add key UI automated feature for Lokalise QA task

  Background: Open login page
    Given I am on the login page

  Scenario Outline: User is able to add new key
    When I login with <username> and <password>
    Then User is logged into the website
    When User opens a project <project>
    Then User can add new key <key> <base> <plural>
    And User can verify key count <count>
    And User can logout from the website

    Examples:
      | username                    | password           | project      | key       | base      | count | plural |
      | dbrackovic2+lok@etf.unsa.ba | qxD9XPf3u9UZDE6_   | 0            | appHeader | Welcome   | 1     | no     |
      | dbrackovic2+lok@etf.unsa.ba | qxD9XPf3u9UZDE6_   | 0            | section   | Section   | 2     | yes    |
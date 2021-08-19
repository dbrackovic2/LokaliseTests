Feature: Add project UI automated feature for Lokalise QA task

  Background: Open login page
    Given I am on the login page

  Scenario Outline: User is able to add new projects
    When I login with <username> and <password>
    Then User is logged into the website
    When User opens a project <project>
    Then User can delete the project
    And User can logout from the website

    Examples:
      | username                    | password                 | project            |
      | dbrackovic2+lok@etf.unsa.ba | qxD9XPf3u9UZDE6_         | 0                  |
      | dbrackovic2+lok@etf.unsa.ba | qxD9XPf3u9UZDE6_         | 0                  |
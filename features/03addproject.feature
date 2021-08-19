Feature: Add project UI automated feature for Lokalise QA task

  Background: Open login page
    Given I am on the login page

  Scenario Outline: User is able to add new projects
    When I login with <username> and <password>
    Then User is logged into the website
    When User creates a new project called <project>
    Then User can verify total number of projects equals <count>
    And User can logout from the website

    Examples:
      | username                    | password                 | project            | count     |
      | dbrackovic2+lok@etf.unsa.ba | qxD9XPf3u9UZDE6_         | TestProject        | 2         |
      | dbrackovic2+lok@etf.unsa.ba | qxD9XPf3u9UZDE6_         | TestProject2       | 3         |
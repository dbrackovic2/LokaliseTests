Feature: Login UI automated feature for Lokalise QA task

  Background: Open login page
    Given I am on the login page

  Scenario Outline: User is able to login to the website
    When I login with <username> and <password>
    Then User is logged into the website
    And User can logout from the website

    Examples:
      | username                    | password                 |
      | dbrackovic2@etf.unsa.ba     | 4_lokalise.com           |
      | dbrackovic2+lok@etf.unsa.ba | qxD9XPf3u9UZDE6_         |
